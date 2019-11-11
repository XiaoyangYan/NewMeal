import React from "react";
import Tags from "./Tags";
import {connect} from "react-redux";
import {addCautions, removeFromCalendar, addRecipe, removeCautions, resetAllT, setPersonalRecipe} from "../actions/planner";
import "./css/CreateRecipe.css";
import AjaxServiceRecipeForm from "./Service/AjaxServiceRecipeForm";
import PersonalRecipe from "./PersonalRecipe";
import { selfRecipe } from "../reducers/calendar";
class CreateRecipe extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                        headLine:"",
                        description:"",
                        allRecipes:[],
                        currentCaution:0,
                        cautionList:["celery-free", "alcohol-free", "crustacean-free", 
                        "gluten-free", "kidney-friendly" ,"wheat-free", "soy-free", "sugar-conscious", 
                        "egg-free", "peanut-free", "mustard-free", "dairy-free" ],
                        checkCautions:[false, false,false, false,false, false,false, false,false, false,false, false],
                        modify: 0,
                }
                this.handleCreateClick = this.handleCreateClick.bind(this);
        }
        handleTextAreaChange = (e) => {
                this.setState({description: e.target.value});
        }
        handleChange = (e) => {
                this.setState({
                        [e.target.name] : e.target.value,
                })
        }
        handleCautionChange = checked => {
                const {addCautions, removeCautions} = this.props;
                var ulCautions = document.getElementsByClassName("Cautions");
                var liCautions = ulCautions[0].getElementsByTagName("li");
                if (checked){
                       addCautions({caution:this.state.cautionList[this.state.currentCaution]});
                       liCautions[this.state.currentCaution].className = "styled-Category active-word";
                  } else {
                       removeCautions({caution:this.state.cautionList[this.state.currentCaution]});
                          liCautions[this.state.currentCaution].className = "styled-Category";    
                  }
                  this.state.checkCautions[this.state.currentCaution] = checked;
        }
        componentWillMount(){
                AjaxServiceRecipeForm.getAllSelfRecipe().then( res => {
                        console.log(res.data);
                        this.props.setPersonalRecipe({recipeMessage: res.data});
                        this.setState({allRecipes: res.data});
                })
                this.props.resetAllT();
        }
        componentDidMount(){
                var _this = this;
                var ulCautions = document.getElementsByClassName("Cautions");
                var liCautions = ulCautions[0].getElementsByTagName("li");
                for(var i = 0; i < liCautions.length; i++){
                        liCautions[i].className = "styled-Category"
                        liCautions[i].index = i;
                        liCautions[i].onclick = function(){
                                _this.setState({currentCaution: this.index});
                        }
                }
        }
        async handleCreateClick(e){
                let {email, username, caution} = this.props;
                console.log(caution);
                const recipeM = {
                        userEmail: email,
                        userName: username,
                        title: this.state.headLine,
                        cautions: caution,
                        recipeDescription: this.state.description
                }
                const data  = await AjaxServiceRecipeForm.createSelfRecipe(recipeM);
                this.props.selfRecipeList({recipeMessage: data.data});
                this.setState({allRecipes: data.data});
                this.props.resetAllT();
        }
        componentWillReceiveProps(nextProps){
                if (this.props.selfRecipeList != nextProps.selfRecipeList){
                        this.props = nextProps;
                }
        }
        render(){
                var {selfRecipeList} = this.props;
                // console.log(selfRecipeList);
                return (
                        <div className="create-recipe-page-all">
                                <form id="my-recipe">
                                        <div>
                                                <h3>Create your own recipe :</h3>
                                                <input className="recipe-header-text" value={this.state.headLine} autoComplete="off"  onChange={this.handleChange}
                                                        placeholder="Please type your recipe name" name="headLine"/>
                                                <div className="styled-Categories">
                                                        <h6>Add Cautions: </h6>
                                                        <ul className="styled-CategoryList Cautions">
                                                        {
                                                                this.state.cautionList.map((items, index) =>
                                                                <li key={index}>
                                                                                <Tags key={index} checked={this.state.checkCautions[index]} index={index}
                                                                                        onChange={this.handleCautionChange}>
                                                                                        {items}
                                                                                </Tags>
                                                                        </li>
                                                                )
                                                        }
                                                        </ul>
                                                </div>
                                                <textarea className="recipe-introduction-text" name="description" placeholder="Please enter a description" autoComplete="off"
                                                        value={this.state.description} onChange={this.handleTextAreaChange}/>
                                                <button className="create-my-recipe"  name="create-recipe"
                                                        onClick={this.handleCreateClick}>create</button>
                                        </div>
                                </form>
                                <ul className="self-recipe-show">
                                        {selfRecipeList && selfRecipeList.map((titems, tindex) =>
                                                <PersonalRecipe items={titems} index={tindex} email={this.props.email} history={this.props.history}/>
                                        )}
                                </ul>
                        </div>
                );
        }
}
const mapStateToProps = (state) =>{
        return {
                caution : state.cautions,
                email: state.users.email,
                username: state.users.username,
                selfRecipeList:state.selfRecipe,
        }
}
export default connect(mapStateToProps, {
        addCautions,
        removeCautions,
        removeFromCalendar,
        addRecipe,
        resetAllT,
        setPersonalRecipe
})(CreateRecipe);