import React from "react";
import Data from "../API/Data";
import Card from "./Card";
import ReactLoading from 'react-loading';
import "./css/CardPage.css";
import AjaxServiceRecipeForm from "./Service/AjaxServiceRecipeForm";
import AjaxServiceReviewForm from "./Service/AjaxServiceReviewForm";
import AuthenticationService from "./Service/AuthenticationService";
import Reviews from "./Reviews";
import StarRatings from 'react-star-ratings';
class CardPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        isLoading: true,
                        currentData: [],
                        totalData: [],
                        successData:"",
                        saved: false,
                        currentLabel:"",
                        totalReview:[],
                        currentRating:0,
                }
                this.handleData = this.handleData.bind(this);
        }
        saveRecipe= (e) =>{
                e.preventDefault();
                const Recipe = {
                       image: this.state.currentData.recipe.uri,
                       label: this.state.currentData.recipe.label,
                       lastUpdateTime: new Date(),
                       publishDate: new Date(),
                       ratings: 0
                }
                const email = AuthenticationService.getEmail();
                if (AuthenticationService.isUserLoggedIn()){
                        AjaxServiceRecipeForm.saveNewFood(Recipe, email).then(
                                res=>{
                                        console.log(res);   
                                        this.setState({saved:true});
                                        console.log(this.state.saved);
                                }
                        )
                }
        }
       
        async componentWillReceiveProps(nextProps){
                if (this.state.currentData.recipe.label !== nextProps.match.params.label){
                        if ( nextProps.match.params.label){
                                this.setState({saved:false});
                               await  this.handleData(nextProps.match.params.label);
                        }
                }
        }
       async handleData(currentLabel){
                console.log(currentLabel);
                this.setState({ isLoading: true, currentLabel});
                let data = await Data.getSpecialRecipe(currentLabel);
                var currentDataList = [];
                 console.log(data);
                data.data.hits.map((recipe, index) => {
                        if (recipe.recipe.label == currentLabel){
                                currentDataList.push(recipe);
                        }
                })
                console.log(currentDataList);
                this.setState({
                        currentData:currentDataList[0],
                        totalData: data.data.hits,
                })
                this.state.totalData.shift(); 
                const label = this.state.currentData.recipe.label;
                AjaxServiceReviewForm.getRecipeReview(label).then(res =>{
                         this.setState({
                                 totalReview: res.data,
                                isLoading: false
                        });
                         console.log(this.state.totalReview);
                })
                AjaxServiceRecipeForm.getSpecialRecipe(label).then(res => {
                        console.log(res.data);
                        this.setState({
                                currentRating: res.data.ratings
                        })
                })
        }
         async  componentDidMount() {
                 const currentLabel = this.props.match.params.label;
                 console.log(currentLabel);
                await this.handleData(currentLabel);
                
        }
        render() {
                if (this.state.isLoading) {
                        return <ReactLoading type={"balls"} color={"green"} height={567} width={475} className="banner-loading" />
                } else {
                        const { currentData, totalData } = this.state;
                        totalData.shift(0);
                        const threeNum = currentData.recipe.digest[0].daily +  currentData.recipe.digest[1].daily
                                + currentData.recipe.digest[2].daily;
                        const widthOne = (currentData.recipe.digest[0].daily*100/threeNum).toLocaleString() + "%";
                        const widthTwo = (currentData.recipe.digest[1].daily*100/threeNum).toLocaleString() + "%";
                         const widthThree = (currentData.recipe.digest[2].daily*100/threeNum).toLocaleString() + "%";
                        return (
                                <>
                                        <section className="total-data cf">
                                                <div className="recipe-data">
                                                        <div className="upper-introduction">
                                                                <img className="recipe-image" src={currentData.recipe.image} alt=""></img>
                                                                <div className="right-intro">
                                                                        <h2 className="recipe-title">{currentData.recipe.label}</h2>
                                                                        <p className="recipe-source">See full recipe on:<a href={currentData.recipe.url}>{currentData.recipe.source}</a></p>
                                                                        <div className="bookmark-options">
                                                                                <StarRatings rating={this.state.currentRating} className="starItem" numOfStars={5} name='rating' starDimension={'20px'}  starRatedColor="gold" />
                                                                                <button className="save-button" onClick={this.saveRecipe}><span>Save</span></button>
                                                                        </div>
                                                                        <div className="save-details">{AuthenticationService.isUserLoggedIn() && this.state.saved &&<p>Saved Food Success!</p>}</div>
                                                                </div>
                                                        </div>
                                                        <div className="recipe-details">
                                                                <div className="recipe-p-i">
                                                                        <div className="recipe-ingredients">
                                                                                <h4>{currentData.recipe.ingredients.length} Ingredients</h4>
                                                                                <ul className="menu-list">
                                                                                        {
                                                                                                currentData.recipe.ingredientLines.map((items, index) =>
                                                                                                        <li key={index}><span>{index}: </span>{items}</li>
                                                                                                )
                                                                                        }
                                                                                </ul>
                                                                        </div>
                                                                        <div className="recipe-preparation">
                                                                                <h4>Preparation</h4>
                                                                        </div>
                                                                        <div className="recipe-review">
                                                                                <h4>Reviews</h4>
                                                                                <Reviews label={currentData.recipe.label} totalReview={this.state.totalReview}/>
                                                                        </div>
                                                                </div>
                                                                <div className="recipe-nutrition" itemProp="nutrition" itemScope=""
                                                                        itemType="http://schema.org/NutritionInformation">
                                                                        <h4>Nutrition</h4>
                                                                        <div className="nutrition-details">
                                                                                <ul className="recipe-diet-labels">
                                                                                        {
                                                                                                currentData.recipe.dietLabels.map((items, index) =>
                                                                                                        <li key={index}><strong>{items}</strong></li>
                                                                                                )
                                                                                        }
                                                                                          {
                                                                                                currentData.recipe.healthLabels.map((items, index) =>
                                                                                                        <li key={index}><strong>{items}</strong></li>
                                                                                                )
                                                                                        }
                                                                                </ul>
                                                                                <div className="nutrition-bar">
                                                                                        <div className="bar-cf">
                                                                                                <span className="red-part" style={{width:widthOne}}></span>
                                                                                                 <span className="yellow-part"  style={{width:widthTwo}}></span>
                                                                                                 <span className="green-part"  style={{width:widthThree}}></span>
                                                                                        </div>
                                                                                </div>
                                                                                <ul className="nutrition-list">
                                                                                        {
                                                                                                currentData.recipe.digest.map((items, index) =>
                                                                                                        <li key={index}>
                                                                                                                <h2>{items.label}</h2><span>{Math.round(items.daily)}{items.unit}</span>
                                                                                                        </li>
                                                                                                )
                                                                                        }
                                                                                </ul>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="side-bar">
                                                        <span className="try-also">Try also</span>
                                                        <ul className="mean-list">
                                                                {
                                                                        totalData.map((items, index) =>
                                                                                <li key={index}><Card calories={items.recipe.calories} ingredientsLength={items.recipe.ingredients.length}
                                                                                        backgroundImage={items.recipe.image} title={items.recipe.label} source={items.recipe.source} 
                                                                                       props={this.props}
                                                                                        /></li>
                                                                        )
                                                                }
                                                        </ul>
                                                </div>
                                        </section>
                                </>
                        );
                }
        }
}

export default CardPage;