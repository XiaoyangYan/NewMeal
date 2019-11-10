import React from "react";
import Tags from "./Tags";
import {connect} from "react-redux";
import {addCautions, removeFromCalendar, addRecipe, removeCautions} from "../actions/planner";
import "./css/CreateRecipe.css";
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
        render(){
                return (
                        <form id="my-recipe">
                                <div>
                                        <input className="recipe-header-text" value={this.state.headLine} autoComplete="off"  onChange={this.handleChange}
                                                placeholder="Please type your header" name="headLine"/>
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
                                        <button className="create-my-recipe"onClick={this.onCreate} name="create-recipe">create</button>
                                </div>
                        </form>
                );
        }
}
const mapStateToProps = (state) =>{
        return {
                caution : state.cautions,
        }
}
export default connect(mapStateToProps, {
        addCautions,
        removeCautions,
        removeFromCalendar,
        addRecipe,
})(CreateRecipe);