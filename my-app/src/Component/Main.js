import React from "react";
import Data from "../API/Data";
import Iframe from 'react-iframe';
import ReactLoading from 'react-loading';
import "./css/Main.css"
class Main extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                }
        }
        // getRandomInt(max) {
        //         return Math.floor(Math.random() * Math.floor(max));
        // }
        // async componentDidUpdate(){
        //          this.setState({isLoading: true});
        //          let num = this.getRandomInt(85);
        //         const data =  await Data.getRecipeFromAPI();
        //         data.slice(num,num + 15);
        //         this.setState({
        //                 currentData: data.data.hits,
        //                 isLoading:false
        //         })
        // }
        async componentDidMount(){
        }
        render(){
               return (
                                <Iframe src="https://www.youtube.com/embed/z7x1aaZ03xU"
                                        id="myFrame" className="main-video" display="initial" position="relative" allowfullscreen/>
                        );
                }
}
export default Main;