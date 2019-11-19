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
                       image: this.state.currentData.uri,
                       label: this.state.currentData.label,
                       lastUpdateTime: new Date(),
                       publishDate: new Date(),
                       ratings: 0
                }
                const email = AuthenticationService.getEmail();
                if (AuthenticationService.isUserLoggedIn()){
                        AjaxServiceRecipeForm.saveNewFood(Recipe, email).then(
                                res=>{
                                        this.setState({saved:true});
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
       async handleData(currentLabel, currentUri){
                this.setState({ isLoading: true, currentLabel});
                let data = await Data.getSpecialRecipes(currentLabel);
                let dataSpecial = await Data.getSpecialRecipe(currentUri);
                this.setState({
                        currentData: dataSpecial.data[0],
                        totalData: data.data.hits,
                })
                this.state.totalData.shift(); 
                console.log(dataSpecial);
                const label = this.state.currentData.label;
                const res = await AjaxServiceReviewForm.getRecipeReview(label)
                this.setState({
                        totalReview: res.data,
               });
                const result = await AjaxServiceRecipeForm.getSpecialRecipe(label)
                this.setState({
                        currentRating: result.data.ratings,
                        isLoading: false
                })
        }
         async  componentDidMount() {
                 const currentLabel = this.props.match.params.name;
                 const currentUri = this.props.match.params.label;
                await this.handleData(currentLabel, currentUri);
                
        }
        render() {
                if (this.state.isLoading) {
                        return <ReactLoading type={"balls"} color={"green"} height={567} width={475} className="banner-loading" />
                } else {
                        var { currentData, totalData } = this.state;
                        totalData.shift(0);
                        console.log(currentData);
                        let first = currentData.digest.shift();
                        let second = currentData.digest.shift();
                        let third = currentData.digest.shift();
                        const threeNum = first.daily +  second.daily+third.daily;
                        const widthOne = (first.daily*100/threeNum).toLocaleString() + "%";
                        const widthTwo = (second.daily*100/threeNum).toLocaleString() + "%";
                         const widthThree = (third.daily*100/threeNum).toLocaleString() + "%";
                        return (
                                <>
                                        <section className="total-data cf">
                                                <div className="recipe-data">
                                                        <div className="upper-introduction">
                                                                <img className="recipe-image" src={currentData.image} alt=""></img>
                                                                <div className="right-intro">
                                                                        <h2 className="recipe-title">{currentData.label}</h2>
                                                                        <p className="recipe-source">See full recipe on:<a href={currentData.url}>{currentData.source}</a></p>
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
                                                                                <h4>{currentData.ingredients.length} Ingredients</h4>
                                                                                <ul className="menu-list">
                                                                                        {
                                                                                                currentData.ingredientLines.map((items, index) =>
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
                                                                                <Reviews label={currentData.label} totalReview={this.state.totalReview}/>
                                                                        </div>
                                                                </div>
                                                                <div className="recipe-nutrition" itemProp="nutrition" itemScope=""
                                                                        itemType="http://schema.org/NutritionInformation">
                                                                        <h4>Nutrition</h4>
                                                                        <div className="nutrition-details">
                                                                                <ul className="recipe-diet-labels">
                                                                                        {
                                                                                                currentData.dietLabels.map((items, index) =>
                                                                                                        <li key={index}><strong>{items}</strong></li>
                                                                                                )
                                                                                        }
                                                                                          {
                                                                                                currentData.healthLabels.map((items, index) =>
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
                                                                                                currentData.digest.map((items, index) =>
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