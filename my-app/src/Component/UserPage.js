import React from "react";
import AuthenticationService from "./Service/AuthenticationService";
import "./css/dr-icon.css";
import "./css/UserPage.css";
import {Switch, Route, NavLink} from "react-router-dom";
import Main from "./Main";
import ReviewList from "./ReviewList";
import {connect} from "react-redux";
import menuConfig from "../config/menuConfig";
import FavoriteRecipe from "./FavoriteRecipe";
import {switchMenu, GetUserName, resetAllT} from '../actions'
import {Menu} from 'antd';
import PlannerPage from "./PlanPage";
import CreateRecipe from "./CreateRecipe";
const {SubMenu} = Menu;

class UserPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        collapsed:false,
                        menuList:[],
                        defaultOpenKeys:[],
                        defaultSelectedKeys:['/'],
                        classNameList:["dr-icon dr-icon-user","dr-icon dr-icon-settings", "dr-icon dr-icon-camera", 
                        "dr-icon dr-icon-heart", "dr-icon dr-icon-bullhorn", "dr-icon dr-icon-download", "dr-icon dr-icon-switch"]
                }
        }
       setMenu = (menu, pItem) => {
               const {classNameList} = this.state;
               return menu.map((items, index) => {
                       if (items.children){
                               return (<SubMenu key={items.key} 
                                                title={<span>{items.title}</span>}
                                                 className={classNameList[index]}>
                                                        {this.setMenu(items.children, items)}
                                                </SubMenu>);
                       }
                       return (
                                 <Menu.Item key={items.key} title={items.title} pitem={pItem}>
                                        <NavLink  to={items.key} className={classNameList[index]}>
                                                 <span>{items.title}</span>
                                        </NavLink>
                                </Menu.Item>
                       );
               })
       }
       componentWillMount(){
               const menuList = this.setMenu(menuConfig);
               this.setState({
                       menuList
               });
       }
       selectBreadCrumb = (currentKey, pathName) => {
               const titleArray = [];
               menuConfig.forEach((item) => {
                        if (item.key === currentKey){
                                titleArray.push(item.title);
                        }
                        if (item.children) {
                                item.children.forEach((sItem) => {
                                        if (sItem.key === pathName){
                                                titleArray.push(sItem.title);
                                        }
                                });
                        }
               });
               return titleArray;
        };
        onCollapse = collapsed => {
                this.setState({ collapsed });
        };
        handleClick = (item) =>{
                const currentKey = '/' + item.key.split('/')[1];
                const pathName = item.key;
                const titleArray = this.selectBreadCrumb(currentKey, pathName);
                this.props.handleClick(titleArray);
        }
        componentDidMount(){
        }
        render() {
                const {username} = this.props;
                return (
                        <div className="card-page-container" >
                                <header className="user-name-title">
                                        <h1>Welcome, {username}
                                                <span>Enjoy your journey in searching food</span>
                                        </h1>
                                </header>
                                <div className="main-part-for-user">
                                        <nav className="user-side-nav">
                                                <Menu theme="dark"
                                                        className="dr-menu  dr-menu-open" 
                                                        defaultOpenKeys={this.state.defaultOpenKeys}
                                                        defaultSelectedKeys={ this.state.defaultSelectedKeys }
                                                        mode="inline">
                                                        {this.state.menuList}
                                                </Menu>
                                        </nav>
                                        <div className="layout-content lower-baby">
                                                <Switch>
                                                        <Route exact path="/user/user-info"  ></Route>
                                                        <Route path="/user/main" component={Main}></Route>
                                                        <Route path="/user/reviews" component={ReviewList}></Route>
                                                         <Route path="/user/favorite" component={FavoriteRecipe}></Route>
                                                         <Route path="/user/planner" component={PlannerPage}></Route>
                                                         <Route path="/user/create" component={CreateRecipe}></Route>
                                                         <Route path="/user/planner"></Route>
                                                </Switch>
                                        </div>
                                </div>
                        </div>
                );
        }

}
const mapStateToProps = (state) => {
        return {
                username: state.users.username
        };
}
const mapDispatchToProps = (dispatch) => {
        return {
                handleClick(titleArray){
                        dispatch(switchMenu(titleArray));
                },
                getUserName(){
                        dispatch(GetUserName());
                },
                resetAllCaution(){
                        dispatch(resetAllT());
                }
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);