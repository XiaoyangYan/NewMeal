import React from "react";
import "./css/Reviews.css";
import ReactValidator  from "./Service/FormErrors";
import AuthenticationService from "./Service/AuthenticationService";
import AjaxServiceReviewForm from "./Service/AjaxServiceReviewForm";
import StarItem from "./StarItems";
import StarRatings from 'react-star-ratings';
class Reviews extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                        message:"",
                        headline:"",
                        comment:"",
                        rating: 0,
                        validator: new ReactValidator(),
                        reviews: this.props.totalReview,
                        savedRecipe:"",
                }
                console.log(this.props.totalReview);
        }
        submitForm = (e) =>{
                e.preventDefault();
                const Review = {
                        comment: this.state.message,
                        headline: this.state.headline,
                        rating: this.state.rating,
                        reviewTime: new Date()
                }
                const email = AuthenticationService.getEmail();
                const label = this.props.label;
                if (AuthenticationService.isUserLoggedIn()){
                        AjaxServiceReviewForm.saveNewReview(Review, email, label).then(
                                res => {
                                        console.log(res.data);
                                        if (typeof res.data == 'string'){
                                                console.log(res.data);
                                                this.setState({savedRecipe:res.data});
                                        } else {
                                                this.setState({reviews: res.data, savedRecipe:""});
                                                console.log(this.state.reviews);
                                        }
                                }
                        )
                }
        }
        
        handleChange = (e) => {
                this.setState({[e.target.name]:e.target.value});
        }
        handleTextAreaChange = (e) => {
                this.setState({message: e.target.value});
        }
        changeRating = (newRating, name) => {
                this.setState({
                        rating: newRating
                })
        }
        render(){
                return(
                        <>
                        <form id="my-review">
                                <div>
                                        <input className="header-text" value={this.state.headline} name="headline"  autoComplete="off" onChange={this.handleChange} placeholder="Please type your headline"/>
                                        <div style={{color:'red'}}>{this.state.validator.message('headline', this.state.headline, 'required|max:20', '', {
                                                required: 'headline cannot be null',
                                                max:'should at most 20 words'
                                        })}</div>
                                        <StarRatings rating={this.state.rating} starRatedColor="gold" changeRating={this.changeRating}
                                                       className="starItem" numOfStars={5} name='rating' starDimension={'20px'}/>
                                </div>
                                <div className="group">
                                        <textarea class="review-text comment-input" name="messge" placeholder="Please enter a comment&hellip;"  autoComplete="off"
                                                value={this.state.message}  onChange={this.handleTextAreaChange}></textarea>
                                                <div style={{color:'red'}}>{this.state.validator.message('message', this.state.message, 'required|min:25|max:200', '', {
                                                        required: 'comments cannot be null',
                                                        min:'should at least 25 words',
                                                        max:'should at most 200 words'
                                                })}</div>
                                </div>
                                <div className="left-word-p">
                                        <p>
                                                <span className="countTxt">You can still type</span>
                                                <strong className="maxNum">200</strong>
                                                <span>words</span>
                                                <button className="send-review-button"  onClick={this.submitForm}>review</button>
                                        </p>
                                </div>
                        </form>
                        <ul className = "comment-show">
                        <h4>{this.state.savedRecipe}</h4>
                               {
                                       this.state.reviews.map((items, index) => 
                                                <li key={index}>
                                                        <div className="comment-except-picture">
                                                               <div className="comment-show-item">
                                                                       <span  className="comment-name">{items.users.fullName}:</span>
                                                                       <span className="comment-headline">{items.headline}</span>
                                                                       <StarItem star={items.rating+1}/>
                                                               </div>
                                                               <div className="comment-main-area">{items.comment}</div>
                                                               <div className="comment-date">
                                                                       <span class="comment-date-left">{items.reviewTime}</span>
                                                                       <div className="comment-button-group">

                                                                       </div>
                                                               </div>
                                                        </div>
                                                        
                                                </li>
                                       )
                               }
                        </ul>
                        </>
                );
        }
}
export default Reviews;