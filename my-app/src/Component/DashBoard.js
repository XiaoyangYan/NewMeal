import React from "react";
import { Link } from 'react-router-dom';
import Data from '../API/Data'
import './css/Loading.min.css'
import './css/DashBoard.css';
import {withRouter} from 'react-router-dom'
class DashBoard extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        isLoading: true,
                        hits: [],
                        loadingClass: '',
                }
        }

        componentWillMount() {
                if (this.state.isLoading) {
                        this.setState({
                                loadingClass: 'i-loading-out'
                        })
                        setTimeout(() => {
                                this.setState({
                                        loadingClass: 'i-loading-out display-none'
                                })
                        }, 1000);
                }
        }

        componentDidMount() {
                this.setState({ isLoading: true })
                Data.getRecipeFromAPI().then(res => {
                        const { hits } = res.data;
                        this.setState({
                                hits,
                                isLoading: false,
                        })
                        console.log(hits);
                })
        }
        render() {
                if (!this.state.isLoading) {
                        const {hits} = this.state;
                        return (
                                <div>
                                        {
                                                hits.map((items, index) =>
                                                        <div className="bg-header-healthy" key={index}>
                                                                <div className="image-background">
                                                                        <img src={items.recipe.image} alt="alt.img" style={{opacity: 0.6}}/>
                                                                </div>
                                                                <div className="group-healthy-food">
                                                                        <h2>{items.recipe.label}</h2>
                                                                        <p>{items.recipe.ingredientLine}</p>
                                                                        <Link to="/menu">See Menu</Link>
                                                                </div>
                                                        </div>
                                                )
                                        }

                                </div>
                        );
                } else {
                        return (
                               <div></div>
                                );
                }

        }
}

export default withRouter(DashBoard);