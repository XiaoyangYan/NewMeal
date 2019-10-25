import React from "react";
import { Link } from 'react-router-dom';
import Data from '../API/Data'
import './css/Loading.min.css';
import ReactLoading from 'react-loading';
import './css/DashBoard.css';
import Search from "./Search";
import Banner from "./Banner";
const ViewList = (props) => {
        return (
                <div>
                        <ul className="view-list gclearfix" >
                                {
                                        props.savedData.map((items, index) =>
                                                <li key={index}>
                                                        <a href="/food_intro" title={items.recipe.label} >
                                                                <img src={items.recipe.image} alt={items.recipe.label} style={{ opacity: 1 }} />
                                                                <span className="name">{items.recipe.label}</span><span className="mask"></span>
                                                        </a>
                                                </li>
                                        )
                                }
                        </ul>
                </div>
        );
}

class DashBoard extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        isLoading: true,
                        balancedHits: [],
                        lowFat:[],
                        highProtein:[],
                        lowCarbon:[],
                        highFiber:[],
                        showed: [false, false,false, false, false],
                        classTitle:["first active", "", "","", ""],
                        current: 0,
                }
                this.acceptData = this.acceptData.bind(this);
        }
        async acceptData(){
                const balancedData = await Data.getDataFromAPIByBalanced();
                const lowFatData = await Data.getDataFromAPIByLowFat();
                const highProteinData = await Data.getDataFromAPIByHighProtein();
                const lowCarbonData = await Data.getDataFromAPIByLowCarb();
                const highFiberData = await Data.getDataFromAPIByHighFiber();
                this.setState({
                        balancedHits: balancedData.hits,
                        lowFat: lowFatData.hits,
                        highProtein: highProteinData.hits,
                        lowCarbon: lowCarbonData.hits,
                        highFiber: highFiberData.hits,
                })
                this.setState({
                        isLoading: false
                })
                console.log(this.state.highProtein);
        }
         componentDidMount() {
                this.setState({ isLoading: true })
                this.acceptData();
        }
        handleButtonChange = (e) => {
                var _this = this;
                var ul_menu = document.getElementById("tabs");
                var ul_banner = document.getElementById("views");
                var li_list = ul_menu.getElementsByTagName("li");
                var li_list_b = ul_banner.children;
                for (var i = 0, len = li_list.length; i < len; i++){
                        li_list[i].className = "";
                        li_list_b[i].className = "view-item";
                        li_list[i].index = i;
                        li_list_b[i].index = i;
                        li_list[i].onclick = function(){
                                _this.setState({
                                        current: this.index,
                                });
                        }
                        li_list_b[this.state.current].className = 'view-item active';
                        li_list[this.state.current].className = 'active';
                }
        }
        render() {
                if (!this.state.isLoading) {
                        const { balancedHits, lowCarbon, lowFat, highFiber, highProtein} = this.state;
                        return (
                                <>
                                <Banner/>
                                <div className="top-rank" id ="artists">
                                        <div className="mod-hd">
                                                <h3>Recommended Food</h3>
                                                <ul className="tabs" id="tabs"  onClick={this.handleButtonChange}>
                                                         <li className="first active">
                                                                 <Link><span>Balanced</span></Link>
                                                         </li>
                                                        <li>
                                                                <Link><span>Low Carbon</span></Link>
                                                        </li>
                                                        <li>
                                                                <Link><span>High Proteins</span></Link>
                                                        </li>
                                                        <li>
                                                                <Link><span>Low Fat</span></Link>
                                                        </li>
                                                        <li  >
                                                                <Link><span>High Fiber</span></Link>
                                                        </li>
                                                </ul>
                                                <span className="more" target="_blank"><a href="#search" >More</a></span>
                                        </div>
                                        <div className="mod-bd">
                                                <ul className="views" id="views">
                                                        <li className="view-item active" >
                                                                <ViewList savedData={balancedHits}/>
                                                         </li>
                                                        <li className="view-item">
                                                                <ViewList savedData={lowCarbon}/>
                                                        </li>
                                                        <li className="view-item" >
                                                                <ViewList savedData={highProtein} />
                                                        </li>
                                                        <li className="view-item">
                                                                <ViewList savedData={lowFat}/>
                                                        </li>
                                                        <li className="view-item">
                                                                <ViewList savedData={highFiber}/>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>
                                <Search/>
                                </>
                        );
                } else {
                        return (
                                <ReactLoading type={"balls"} color={"green"} height={667} width={375} />
                        );
                }

        }
}

export default DashBoard;