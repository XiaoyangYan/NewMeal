import React from "react";
import "./css/Banner.css"
class Banner extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        indent: 0,
                        timer: {},
                }
        }
        stopAutoPlay = () => {
                clearInterval(this.state.timer);
        }
        startAutoPlay = () => {
               this.setState({
                        timer : setInterval(() => {
                                this.changeImg();
                                this.setState({
                                        indent: this.state.indent+1
                                })
                                if (this.state.indent >= document.getElementsByClassName("banner-aty").length){
                                        this.setState({indent: 0});
                                }
                        },2000)
               })
               
        }
        changeImg = () => {
                const {indent} = this.state;
                var banners = document.getElementsByClassName("banner-aty");
                for(var i = 0; i < banners.length; i++){
                        banners[i].className = "banner-aty";
                }
                banners[indent].className = "banner-aty active";
        }
        componentDidMount(){
                this.startAutoPlay();
        }
        componentWillUnmount(){
                this.stopAutoPlay();
        }
        render() {
                return (
                        <div onMouseOver={this.stopAutoPlay} onMouseOut={this.startAutoPlay}>
                                <div className="banner-aty active">
                                        <div className="banner-aul">
                                                <div className="banner-agv" >
                                                        <div className="banner-img"></div>
                                                </div>
                                                <div className="banner-bh">
                                                        <div className="banner-e ny">
                                                                <div className="banner-axs">
                                                                        <span className="banner-avo">A recipe for every adventure</span>
                                                                        <h1 className="banner-h1 gp"><strong>It begins with your heart</strong></h1>
                                                                        <p className="banner-p gp-h">
                                                                                Smoother of smoothest smoothies, topper of tastiest tacos,
                                                                                fluffer of fluffiest flapjacks, creamer of creamiest crème brûlée.
                                                                                This is magic in the making.
                                                                                </p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="banner-aty ">
                                        <div className="banner-aul yellow-font">
                                                <div className="banner-agv" >
                                                        <div className="banner-img-one"></div>
                                                </div>
                                                <div className="banner-bh">
                                                        <div className="banner-e ny">
                                                                <div className="banner-axs">
                                                                        <span className="banner-avo">A recipe for every adventure</span>
                                                                        <h1 className="banner-h1 gp"><strong>It begins with your soul</strong></h1>
                                                                        <p className="banner-p gp-h">
                                                                                Smoother of smoothest smoothies, topper of tastiest tacos,
                                                                                fluffer of fluffiest flapjacks, creamer of creamiest crème brûlée.
                                                                                This is magic in the making.
                                                                                </p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="banner-aty">
                                        <div className="banner-aul">
                                                <div className="banner-agv" >
                                                        <div className="banner-img-two"></div>
                                                </div>
                                                <div className="banner-bh">
                                                        <div className="banner-e ny">
                                                                <div className="banner-axs">
                                                                        <span className="banner-avo">A recipe for every adventure</span>
                                                                        <h1 className="banner-h1 gp"><strong>It begins with your mouth</strong></h1>
                                                                        <p className="banner-p gp-h">
                                                                                Smoother of smoothest smoothies, topper of tastiest tacos,
                                                                                fluffer of fluffiest flapjacks, creamer of creamiest crème brûlée.
                                                                                This is magic in the making.
                                                                                </p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                );
        }
}
export default Banner;