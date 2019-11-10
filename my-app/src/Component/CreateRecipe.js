import React from "react";
import Tags from "./Tags";
import {connect} from "react-redux";
import {addCautions, removeFromCalendar, addRecipe, removeCautions, resetAllT} from "../actions/planner";
import "./css/CreateRecipe.css";
import AjaxServiceRecipeForm from "./Service/AjaxServiceRecipeForm";
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
        componentDidMount(){
                var _this = this;
                AjaxServiceRecipeForm.getAllSelfRecipe().then( res => {
                        console.log(res.data);
                        this.setState({allRecipes: res.data});
                })
                this.props.resetAllT();
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
                const recipeMessage = {
                        userEmail: email,
                        userName: username,
                        title: this.state.headLine,
                        cautions: caution,
                        recipeDescription: this.state.description
                }
                const data  = await AjaxServiceRecipeForm.createSelfRecipe(recipeMessage);
                console.log(data);
                this.setState({allRecipes: data.data});
                this.props.resetAllT();
        }
        render(){
                return (
                        <div>
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
                                                <button className="create-my-recipe"onClick={this.onCreate} name="create-recipe"
                                                        onClick={this.handleCreateClick}>create</button>
                                        </div>
                                </form>
                                <ul className="self-recipe-show">
                                        {this.state.allRecipes && this.state.allRecipes.map((items, index) =>
                                                 <li key={index}>
                                                         <div className="button-self-recipe-group">
                                                                <button  className="edit-my-new-recipe">Edit</button>
                                                                <button  className="delete-my-new-recipe">Delete</button>
                                                         </div>
                                                         <div className="self-recipe-except-picture">
                                                                 <div className="self-recipe-show-item">
                                                                         <div className="self-recipe-name"><span>Creator:  </span>{items.userName}</div>
                                                                         <div className="self-recipe-headline"><span>Recipe Name:  </span>{items.title}</div>
                                                                 </div>
                                                                 <div className="styled-Categories">
                                                                        <h6> Cautions: </h6>
                                                                        <ul className="styled-CategoryList Cautions">
                                                                        {
                                                                                items.cautions.map((smallItems, smallIndex) =>
                                                                                <li key={smallIndex}>
                                                                                                <Tags key={smallIndex} >{smallItems}</Tags>
                                                                                </li>
                                                                                )
                                                                        }
                                                                        </ul>
                                                                </div>
                                                                 <div className="self-recipe-main-area"><span>Description: </span>{items.recipeDescription}</div>
                                                         </div>
                                                         
                                                 </li>
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
        }
}
export default connect(mapStateToProps, {
        addCautions,
        removeCautions,
        removeFromCalendar,
        addRecipe,
        resetAllT,
})(CreateRecipe);