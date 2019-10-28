import React from "react";
import "./css/Card.css";
import {Link} from "react-router-dom"
class Card extends React.Component{
        constructor(props){
                super(props);
                this.state = {

                }
        }
        render(){
                return(
                        <>
                        <div className="bookmark-btn">
                                <Link to={{pathname:`/card/${this.props.title}`, state:{label:`${this.props.title}`}}} exact="true" className="add-bookmark block inp-btn btn-white"><span>Save</span></Link>
                        </div>
                        <div className="box">
                                <div className="inner" itemScope itemType="http://schema.org/Recipe">
                                        <div className="object">
                                                <img className="card-image" src={this.props.backgroundImage} alt="./images/all.jpg"></img>
                                                <span className="card-title" itemProp="name">{this.props.title}</span>
                                        </div>
                                </div>
                                <ul className="card-data cf">
                                        <li itemProp="nutrition" className="card-cal">
                                                <span className="card-num">{Math.round(this.props.calories)}</span><span className="card-lbl">CALORIES</span>
                                        </li>
                                        <li itemProp="ingredients" className="card-ing">
                                                <span className="card-num">{this.props.ingredientsLength}</span><span className="card-lbl">INGREDIENTS</span>
                                        </li>
                                </ul>
                                <div className="card-source">
                                        <p>{this.props.source}</p>
                                </div>
                        </div>
                        </>
                );
        }
}
export default Card;