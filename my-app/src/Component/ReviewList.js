import React from "react";
import StarItem from "./StarItems";
import AjaxServiceReviewForm from "./Service/AjaxServiceReviewForm";
import AuthenticationService from "./Service/AuthenticationService";
import ReactLoading from 'react-loading';
class ReviewList extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                        reviews: [],
                        isLoading:true,
                }
        }
        async componentDidMount(){
                this.setState({isLoading:true});
                if (AuthenticationService.isUserLoggedIn()){
                         let email = AuthenticationService.getEmail();
                         email = email.trim();
                        const reviewL = await AjaxServiceReviewForm.getRecipeReviewByUser(email);
                        console.log(reviewL);
                        this.setState({
                                reviews: reviewL.data,
                                isLoading:false,
                        })
                }
        }
        render(){
                if (this.state.isLoading){
                        return <ReactLoading type={"balls"} color={"green"} height={567} width={475} className="banner-loading" />
                } else {
                        console.log(this.state.reviews.data);
                        return (
                                <ul className="comment-show lower-baby">
                                        {this.state.reviews.length > 0 &&
                                                this.state.reviews.map((items, index) =>
                                                        <li key={index}>
                                                                <div className="comment-except-picture">
                                                                        <div className="comment-show-item">
                                                                                <span className="comment-name">{items.users.fullName}:</span>
                                                                                <span className="comment-headline">{items.headline}</span>
                                                                                <StarItem star={items.rating + 1} />
                                                                        </div>
                                                                        <div className="comment-main-area">{items.comment}</div>
                                                                        <div className="comment-date">
                                                                                <span class="comment-date-left">{items.reviewTime}</span>
                                                                        </div>
                                                                </div>
                                                        </li>
                                                )
                                        }
                                </ul>
                        )
                }
                
        }
}

export default ReviewList;