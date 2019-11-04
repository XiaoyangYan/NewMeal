import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

const AppModal = ({ isOpen, onClose, label, children }) => {
	ReactModal.setAppElement('#root')
	return (
		<ReactModal
			className='modal'
			overlayClassName='overlay'
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel={label}
		>

			<div style={{ float: 'right' }}>
				<button className="icon-btn" onClick={(e) => { this.props.onClose() }} aria-label='Close modal' style={{ width: "40px", height: "40px" }}>
					<i className="fa fa-close fa-lg " style={{ font: "60px" }} autoFocus />
				</button>
			</div>
			{children}
		</ReactModal>
	);
};
AppModal.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	label: PropTypes.string,
};
export default AppModal;