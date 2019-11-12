import React from "react";
import Card from "./Card";
import AjaxServiceRecipeForm from "./Service/AjaxServiceRecipeForm";
import AuthenticationService from "./Service/AuthenticationService";
import Data from "../API/Data";
import ReactLoading from 'react-loading';
import "./css/AdvancedRecommendation.css";

class AdvancedRecommendation extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        currentData: [],
                        rec: [],
                        isLoading: false,
                        removeLabel: "",
                        sorting: "",
                        favData: [],
                        recommendRecipe: [],
                }
        }
        async assignData() {
                const { rec } = this.state;
                var searchString = "";
                for (let i = 0; i < rec.length; i++) {
                        let ss = encodeURIComponent(rec[i].image);
                        searchString = searchString + "&r=";
                        searchString += ss;
                }
                const findMySavedFood = await Data.getRecipeFromFavorite(searchString);
                let arrayRecipe = findMySavedFood.data
                this.setState({ currentData: arrayRecipe });
        }
        async componentWillMount() {
                this.setState({ isLoading: true });
                const email = AuthenticationService.getEmail();
                const savedRecipe = await AjaxServiceRecipeForm.findFavoriteRecipe(email);
                const rec = savedRecipe.data;
                this.setState({ rec });
                await this.assignData();
                const pyData = await AjaxServiceRecipeForm.getDataFromPython(this.state.currentData);
                let ss = "";
                let pyModify = Array.from(new Set(pyData.data));
                for (let i = 0; i < pyModify.length; i++) {
                        ss = ss + "&r=" + encodeURIComponent(pyModify[i]);
                }
                const recommend = await Data.getRecipeFromFavorite(ss);
                console.log(recommend);
                this.setState({ recommendRecipe: recommend.data, isLoading: false });
        }
        render() {
                if (!this.state.isLoading) {
                        return (
                                <section className="advanced-planner-section">
                                        <div className="planImage"></div>
                                        <div className="advanced-planner-content">
                                                <h2>This planner is depend on user's favorite food. </h2>
                                                <ul className="advanced-grid">
                                                        {this.state.recommendRecipe.map((items, index) =>
                                                                <li className="assign-data" key={index} >
                                                                        <Card calories={items.calories} ingredientsLength={items.ingredients.length}
                                                                                backgroundImage={items.image} title={items.label} source={items.source}
                                                                                props={this.props} /></li>
                                                        )
                                                        }
                                                </ul>
                                        </div>
                                </section>
                        );
                } else {
                        return <ReactLoading type={"balls"} color={"green"} height={567} width={475} className="banner-loading"/>
                }

        }
}

export default AdvancedRecommendation;