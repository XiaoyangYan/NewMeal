import React from "react";
import {Tag} from "antd";
import "antd/es/tag/style/css";
const {CheckableTag} = Tag;

class Tags extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                        checked: props.checked,
                }
        }

        handleChange = checked => {
                this.props.onChange(checked);
                this.setState({checked});
        }

        render() {
                return (
                        <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
                )
        }
}
export default Tags;