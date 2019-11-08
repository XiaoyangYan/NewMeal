import React from "react";
import './css/Loading.min.css';
import './css/CreatePage.css';
import CreateForm from './CreateForm';


class CreatePage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                }
        }

        render() {
                return (
                        <>
                        <div class="planImage"></div>
                        <div class="create-content">
						<CreateForm></CreateForm>
                        </div>
                        </>
                        
                );

        }
}

export default CreatePage;