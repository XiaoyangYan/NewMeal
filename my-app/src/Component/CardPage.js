import React from "react";
import StarItem from "./StarItems";
import Data from "../API/Data";
import Card from "./Card";
import ReactLoading from 'react-loading';
import "./css/CardPage.css";
import AjaxServiceRecipeFrom from "./Service/AjaxServiceRecipeForm"
import AjaxServiceRecipeForm from "./Service/AjaxServiceRecipeForm";
import AuthenticationService from "./Service/AuthenticationService";
class CardPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        isLoading: true,
                        currentData: [],
                        totalData: [],
                        successData:"",
                        saved: false,
                }
        }
        saveRecipe= (e) =>{
                e.preventDefault();
                const Recipe = {
                       image: this.state.currentData.recipe.image,
                       label: this.state.currentData.recipe.label,
                       lastUpdateTime:new Date(),
                       publishDate:new Date()
                }
                const email = AuthenticationService.getEmail();
                if (AuthenticationService.isUserLoggedIn()){
                        AjaxServiceRecipeForm.saveNewFood(Recipe, email).then(
                                res=>{
                                console.log(res);   
                                this.setState({saved:true});
                                }
                        )
                }
                
        }
        async  componentDidMount() {
                const currentLabel = this.props.location.state.label;
                console.log(currentLabel);
                this.setState({ isLoading: true });
                const data = await Data.getSpecialRecipe(currentLabel);
                this.setState({
                        currentData: data.data.hits[0],
                        totalData: data.data.hits,
                        isLoading: false,
                })
                this.state.totalData.shift();
                console.log(this.state.currentData);
        }
        render() {
                if (this.state.isLoading) {
                        return <ReactLoading type={"balls"} color={"green"} height={567} width={475} className="banner-loading" />
                } else {
                        const { currentData, totalData } = this.state;
                        totalData.shift(0);
                        var num = 0;
                        var average = 0;
                        for (var item in  currentData.recipe.digest){
                                num += item.daily;
                        }
                        average = num/currentData.recipe.digest.length;
                        console.log(currentData.dietLabels);
                        return (
                                <>
                                        <section className="total-data cf">
                                                <div className="recipe-data">
                                                        <div className="upper-introduction">
                                                                <img className="recipe-image" src={currentData.recipe.image} alt=""></img>
                                                                <div className="right-intro">
                                                                        <h2 className="recipe-title">{currentData.recipe.label}</h2>
                                                                        <p className="recipe-source">See full recipe on:<a href="/">{currentData.recipe.source}</a></p>
                                                                        <div className="bookmark-options"><button className="save-button" onClick={this.saveRecipe}><span>Save</span></button></div>
                                                                        <p className="save-details"></p>
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
                                                                                {AuthenticationService.isUserLoggedIn() && this.state.saved &&<p>Saved Food</p>}
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
                                                                                </ul>
                                                                                <div className="nutrition-bar">
                                                                                        <div className="bar-cf">
                                                                                                <span className="red-part" style={{width:currentData.recipe.digest[0].daily*2}}></span>
                                                                                                 <span className="yellow-part"  style={{width:currentData.recipe.digest[1].daily*2}}></span>
                                                                                                 <span className="green-part"  style={{width:currentData.recipe.digest[2].daily*2}}></span>
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
                                                                                        backgroundImage={items.recipe.image} title={items.recipe.label} source={items.recipe.source} /></li>
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