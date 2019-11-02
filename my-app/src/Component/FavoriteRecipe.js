import React from "react";
import AjaxServiceRecipeForm from "./Service/AjaxServiceRecipeForm";
import AuthenticationService from "./Service/AuthenticationService";
import AjaxServiceReviewForm from "./Service/AjaxServiceReviewForm";
import Data from "../API/Data";

class FavoriteRecipe extends React.Component{
        constructor(props){
                super(props);
                this.state ={
                        currentData:[],
                        isLoading:false,
                }
        }

        async componentDidMount(){
                this.setState({isLoading: false});
                const email = AuthenticationService.getEmail();
                const savedRecipe = await AjaxServiceRecipeForm.findFavoriteRecipe(email);
                var searchString = ""
                console.log(savedRecipe.data);
                const rec = savedRecipe.data;
                for (let i = 0; i < rec.length; i++){
                         let ss  = encodeURIComponent(rec[i].image);
                        searchString = searchString + "&r=";
                        searchString += ss;
                }
                console.log(searchString);
                const findMySavedFood = await Data.getRecipeFromFavorite(searchString);
                console.log(findMySavedFood);

                const pyData = await AjaxServiceRecipeForm.getDataFromPython(findMySavedFood);
                console.log(pyData);
        }

        render(){
                return (
                        <div>Favorite</div>
                )
        }
}

export default FavoriteRecipe;