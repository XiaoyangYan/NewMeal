import React from 'react';
import Modal from 'react-modal';

class AppModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	componentWillMount() {
                Modal.setAppElement('body');
            }
	render() {
		const { isOpen, onClose, label, children } = this.props
			return(
				<Modal
					className='modal'
					overlayClassName='overlay'
					isOpen={isOpen}
					onRequestClose={onClose}
					contentLabel={label}
				>
					<div style={{ float: 'right' }}>
						<button className="icon-btn" onClick={onClose} aria-label='Close modal'>
							<i size={24} className="fa fa-close" />
						</button>
					</div>
					{children}
				</Modal>
			);
	};
}
export default AppModal;
