import React from "react";
import AjaxServiceRecipeForm from "./Service/AjaxServiceRecipeForm";
import AuthenticationService from "./Service/AuthenticationService";
import Data from "../API/Data";
import StarItem from "./StarItems";
import "./css/FavoriteRecipe.css";
import {Link} from "react-router-dom";
class FavoriteRecipe extends React.Component{
        constructor(props){
                super(props);
                this.state ={
                        currentData:[],
                        rec:[],
                        isLoading:false,
                }
        }

        async componentDidMount(){
                this.setState({isLoading: false});
                const email = AuthenticationService.getEmail();
                const savedRecipe = await AjaxServiceRecipeForm.findFavoriteRecipe(email);
                var searchString = ""
                // console.log(savedRecipe.data);
                const rec = savedRecipe.data;
                this.setState({rec});
                for (let i = 0; i < rec.length; i++){
                         let ss  = encodeURIComponent(rec[i].image);
                        searchString = searchString + "&r=";
                        searchString += ss;
                }
                console.log(searchString);
                const findMySavedFood = await Data.getRecipeFromFavorite(searchString);
                console.log(findMySavedFood);
                let arrayRecipe = findMySavedFood.data
                this.setState({currentData:arrayRecipe});
                const pyData = await AjaxServiceRecipeForm.getDataFromPython(arrayRecipe);
                console.log(pyData);
        }
        decideColor(index){
                index  = index%4;
                switch(index){
                        case 1:
                                return "blue";
                        case 2:
                                return "pink";
                        case 3:
                                return "red";
                        case 4:
                                return "green";
                        default:
                                return "orange";
                }
        }
        render(){
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
                                                        <th>tags</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                {
                                                        this.state.currentData.map((items, index) => 
                                                                <tr key={index}>
                                                                        <td>{index}</td>
                                                                        <td><img src={items.image} alt="recipe"/></td>
                                                                        <td><Link to={{pathname:`/card/${items.label}`, state:{label:`${items.label}`}}} exact="true">{items.label}</Link> </td>
                                                                        <td>{Math.round(items.calories)}</td>
                                                                        <td><StarItem star={this.state.rec[index].ratings+1}/></td>
                                                                        <td>
                                                                             {
                                                                                     items.dietLabels.map((items, index) => 
                                                                                            <div key={index} style={{background: this.decideColor(index),color:"white"}}  className="health-label">
                                                                                                        {items}
                                                                                            </div>
                                                                                     )
                                                                             } 
                                                                             <button className="cancel-saved-recipe">delete</button>
                                                                        </td>
                                                                </tr>
                                                        )
                                                }
                                        </tbody>
                                </table>
                                       
                       </section>
                )
        }
}

export default FavoriteRecipe;