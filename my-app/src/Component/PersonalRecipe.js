import React from "react";
import Tags from "./Tags";
import {connect} from "react-redux";
import {addCautions, removeFromCalendar, addRecipe, removeCautions, 
        resetAllT, setPersonalRecipe} from "../actions/planner";
import AjaxServiceRecipeForm from "./Service/AjaxServiceRecipeForm";
class PersonalRecipe extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                        editable: false,
                        deletable: false,
                        cautionList:["celery-free", "alcohol-free", "crustacean-free", 
                        "gluten-free", "kidney-friendly" ,"wheat-free", "soy-free", "sugar-conscious", 
                        "egg-free", "peanut-free", "mustard-free", "dairy-free" ],
                        checkCautions:[false, false,false, false,false, false,false, false,false, false,false, false],
                        headLine:"",
                        description:"",
                        allRecipes:[],
                        currentCaution:0,
                        editClassName: ["styled-Category","styled-Category","styled-Category","styled-Category","styled-Category","styled-Category",
                        "styled-Category","styled-Category","styled-Category","styled-Category","styled-Category","styled-Category","styled-Category",
                        "styled-Category"],
                        items: this.props.items,
                }
                this.props.resetAllT();
                this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleTextAreaChange = (e) => {
                this.setState({description: e.target.value});
        }
        handleChange = (e) => {
                this.setState({
                        [e.target.name] : e.target.value,
                })
        }
        noneEffect = checked => {
        }
        onEditable = (e) => {
                this.setState({
                        editable: !this.state.editable,
                })
        }
        
        async handleSubmit(e) {
                let {email, username} =this.props;
                let {items} = this.state;
                var allRecipe = [];
                for (let i = 0; i < this.state.cautionList.length; i++){
                        if (this.state.checkCautions[i]){
                                allRecipe.push(this.state.cautionList[i]);
                        }
                }
                console.log(allRecipe);
                const recipeM = {
                        _id: items._id,
                        userEmail: email,
                        userName: username,
                        title:  this.state.headLine,
                        cautions: allRecipe,
                        recipeDescription: this.state.description
                }
                const data = await AjaxServiceRecipeForm.editOneSelfRecipe(recipeM);
                this.props.setPersonalRecipe({recipeMessage: data.data});
                this.setState({ editable: false, checkCautions:[false, false,false, false,false, false,false, false,false, false,false, false]});
                this.props.resetAllT();
        }
        handleCautionClick (index){
                const {addCautions, removeCautions} = this.props;
                this.state.checkCautions[index] = !this.state.checkCautions[index];
                if (this.state.checkCautions[index]){
                       addCautions({caution:this.state.cautionList[index]});
                      this.state.editClassName[index] = "styled-Category active-word"
                  } else {
                       removeCautions({caution:this.state.cautionList[index]});
                       this.state.editClassName[index] = "styled-Category";
                  }
        }
        componentWillUpdate(nextProps, nextState){
                if (nextState.checkCautions != this.state.checkCautions ){
                        this.state.checkCautions = nextState.checkCautions;
                        this.setState({editClassName:["styled-Category","styled-Category","styled-Category","styled-Category","styled-Category","styled-Category",
                        "styled-Category","styled-Category","styled-Category","styled-Category","styled-Category","styled-Category","styled-Category",
                        "styled-Category"]});
                        console.log(this.state.editClassName);
                }
        }
        componentDidMount(){
                const { items} = this.props;
                this.setState({headLine: items.title, description: items.recipeDescription, items});
                // this.props.setPersonalRecipe({recipeMessage:items});
                this.props.resetAllT();
        }
        render(){
                const {index, items} = this.props;
                let {email} = this.props;
                email = email.trim();
                items.userEmail = items.userEmail.trim();
                return (
                        <li key={index}>
                               <div className="button-self-recipe-group">
                               {(email == items.userEmail) && <button  className="edit-my-new-recipe" onClick={this.onEditable}>Edit</button>}
                               {(email == items.userEmail) &&  <button  className="delete-my-new-recipe" onClick={this.props.onDelete}>Delete</button>}
                                </div>
                                <div className="self-recipe-except-picture">
                                        <div className="self-recipe-show-item">
                                                <div className="self-recipe-name"><span>Creator:  </span>{items.userName}</div>
                                                {!this.state.editable && <div className="self-recipe-headline"><span>Recipe Name:  </span>{items.title}</div>}
                                                {(email == items.userEmail) && (this.state.editable) && 
                                                <input className="recipe-header-text" value={this.state.headLine} 
                                                autoComplete="off"  onChange={this.handleChange}
                                                        placeholder="Please type your recipe name" name="headLine"/>}
                                        </div>
                                        <div className="styled-Categories">
                                                <h6> Cautions: </h6>
                                                <ul className="styled-CategoryList">
                                                        { !this.state.editable &&
                                                                items.cautions.map((smallItems, smallIndex) =>
                                                                <li key={smallIndex}>
                                                                                <Tags key={smallIndex} checked={false}  onChange={this.noneEffect}>
                                                                                {smallItems}
                                                                                </Tags>
                                                                </li>
                                                                )
                                                        }
                                                </ul>
                                                <ul className="styled-CategoryList   Cautions-inners" >
                                                        { this.state.editable && (email === items.userEmail) &&
                                                                this.state.cautionList.map((items, kindex) =>
                                                                <li key={kindex} >
                                                                         <div index={index} className={this.state.editClassName[kindex]} onClick={() => this.handleCautionClick(kindex)} 
                                                                         checked={this.state.currentCaution[kindex]}>{items}</div>
                                                                </li>
                                                                )
                                                        }
                                                </ul>
                                        </div>
                                       {!this.state.editable  && <div className="self-recipe-main-area"><span>Description: </span>{items.recipeDescription}</div>}
                                       {this.state.editable && (items.userEmail ==  email ) && 
                                                <textarea className="recipe-introduction-text" name="description" placeholder="Please enter a description" autoComplete="off"
                                                 value={this.state.description} onChange={this.handleTextAreaChange}/>} 
                                        {this.state.editable && <button  className="save-my-edited-new-recipe"   onClick={this.handleSubmit}>Save</button>}
                                </div>
                        </li>
                );
        }
}
const mapStateToProps = (state) =>{
        return {
                caution : state.cautions,
                email: state.users.email,
                username: state.users.username,
                selfRecipeList: state.selfRecipe,
        }
}
export default connect(mapStateToProps, {
        addCautions,
        removeCautions,
        removeFromCalendar,
        addRecipe,
        resetAllT,
        setPersonalRecipe,
})(PersonalRecipe);