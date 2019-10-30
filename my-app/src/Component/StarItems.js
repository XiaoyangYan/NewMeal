import React from "react";
import "./css/StarItem.css"
class StarItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickIndex: 0,
			hoverIndex: 0,
			starNum: ['star0', 'star0', 'star0', 'star0', 'star0']
		}
	}
	componentDidMount() {
		this.getStar(this.props.star);
	}
	getStar(num) {
		let newStar = this.state.starNum.map((item) => {
			--num;
			return num >= 1 ? 'star2' : ((num < 1 && num > 0) ? 'star1' : 'star0');
		})
		this.setState({
			starNum: newStar
		})
	}
	handleClick = (index) => {
		this.setState({
			clickIndex: index,
		})
		
	}
	render() {
		return (<span className="star">
			{
				this.state.starNum.map((item, index) => {
					return <span className={item} key={index}></span>
				})
			}
		</span>)
	}
}
export default StarItems;