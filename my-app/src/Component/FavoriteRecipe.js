import React from "react";
import AjaxServiceRecipeForm from "./Service/AjaxServiceRecipeForm";
import AuthenticationService from "./Service/AuthenticationService";
import Data from "../API/Data";
import StarItem from "./StarItems";
import "./css/FavoriteRecipe.css";
import ReactLoading from "react-loading";
import {Link} from "react-router-dom";
import StarRatings from 'react-star-ratings';
class FavoriteRecipe extends React.Component{
        constructor(props){
                super(props);
                this.state ={
                        currentData:[],
                        rec:[],
                        isLoading:false,
                        removeLabel: "",
                        sorting:"",
                }
                this.onDelete = this.onDelete.bind(this);
                this.sortByRating = this.sortByRating.bind(this);
                this.onChange = this.onChange.bind(this);
        }
       async  onDelete (e){
                e.preventDefault();
               const label = e.target.name;
               await this.deleteData(label);
               await this.assignData();
        }
        async deleteData(label){
                const email = AuthenticationService.getEmail();
                this.setState({isLoading:true})
                const data = await AjaxServiceRecipeForm.deleteSaveRecipe(email, label);
                this.setState({rec: data.data});
        }
        async assignData (){
                const {rec} = this.state;
                var searchString = "";
                for (let i = 0; i < rec.length; i++){
                        let ss  = encodeURIComponent(rec[i].image);
                       searchString = searchString + "&r=";
                       searchString += ss;
               }
               const findMySavedFood = await Data.getRecipeFromFavorite(searchString);
               let arrayRecipe = findMySavedFood.data
               this.setState({currentData:arrayRecipe, isLoading:false});
        }
        async sortByRating(){
                let {rec} = this.state;
                rec.sort((a, b) => {
                        if (a.ratings > b.ratings){
                                return -1;
                        } else {
                                return 1;
                        }
                })
                await this.assignData();
        }
        async sortByPublishDate(){
                let {rec} = this.state;
                rec.sort((a, b) => {
                        if (a.publishDate > b.publishDate){
                                return -1;
                        } else {
                                return 1;
                        }
                })
                await this.assignData();
        }
        async componentWillMount(){
               this.setState({isLoading: true});
                const email = AuthenticationService.getEmail();
                const savedRecipe = await AjaxServiceRecipeForm.findFavoriteRecipe(email);
                // console.log(savedRecipe.data);
                const rec = savedRecipe.data;
                this.setState({rec});
                console.log(rec);
                this.sortByRating();
                this.assignData();
                // const pyData = await AjaxServiceRecipeForm.getDataFromPython(arrayRecipe);
                // console.log(pyData);
        }
        decideColor(index){
                index  = index%4;
                switch(index){
                        case 0:
                                return "orange";
                        case 1:
                                return "pink";
                        case 2:
                                return "blue";
                        case 3:
                                return "green";
                        default:
                                return "red";
                }
        }
        async onChange(e){
                e.preventDefault();
                this.setState({
                        [e.target.name] : e.target.value,
                })
                switch(e.target.value){
                        case "ratings":
                                await this.sortByRating();
                                break;
                        case "SaveDate":
                                await this.sortByPublishDate();
                                break;
                        default:
                                break;
                }
        }
        render(){
                if (this.state.isLoading) {
                        return <ReactLoading type={"balls"} color={"green"} height={567} width={475} className="banner-loading" />
                } else {
                        return (
                                <section className="saved-recipe-list">
                                         <table className="table table-striped">
                                                 <thead>
                                                         <tr>
                                                                 <th>No</th>
                                                                 <th>image</th>
                                                                 <th>label</th>
                                                                 <th>calories</th>
                                                                 <th>ratings</th>
                                                                 <th>tags 
                                                                         <div className="sort-select-box">
                                                                                 <label className="sort-label"></label>
                                                                                <select value={this.state.sorting} onChange={this.onChange} name="sorting">
                                                                                        <option value="ratings">Ratings</option>
                                                                                        <option value="SaveDate">Saved Date</option>
                                                                                </select>
                                                                         </div>
                                                                </th>
                                                         </tr>
                                                 </thead>
                                                 {this.state.currentData &&
                                                 <tbody className="tbody">
                                                         {
                                                                 this.state.currentData.map((items, index) => 
                                                                         <tr key={index}>
                                                                                 <td>{index}</td>
                                                                                 <td><img src={items.image} alt="recipe"/></td>
                                                                                 <td><Link to={{pathname:`/card/${items.label}`, state:{label:`${items.label}`}}} exact="true">{items.label}</Link> </td>
                                                                                 <td>{Math.round(items.calories)}</td>
                                                                                 <td><StarRatings rating={this.state.rec[index].ratings} starRatedColor="gold" className="starItem" numOfStars={5} name='rating' starDimension={'15px'}/></td>
                                                                                 <td>
                                                                                      {
                                                                                              items.dietLabels.map((items, index) => 
                                                                                                     <div key={index} style={{background: this.decideColor(index),color:"white"}}  className="health-label">
                                                                                                                 {items}
                                                                                                     </div>
                                                                                              )
                                                                                      } 
                                                                                      <button className="cancel-saved-recipe" key={index} onClick={this.onDelete} name={items.label}>delete</button>
                                                                                 </td>
                                                                         </tr>
                                                                 )
                                                         }
                                                 </tbody>
                                                 }
                                         </table>
                                                
                                </section>
                         )
                }
                
        }
}

export default FavoriteRecipe;