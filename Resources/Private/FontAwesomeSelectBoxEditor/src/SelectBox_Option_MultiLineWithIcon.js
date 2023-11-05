import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from "./styles.css"

class SelectBox_Option_MultiLineWithIcon extends PureComponent {
	static propTypes = {
		label: PropTypes.string.isRequired,
		icon: PropTypes.string,
		onClick: PropTypes.func,
		isHighlighted: PropTypes.bool,
		onMouseEnter: PropTypes.func,
	}

	render() {

		const {
			label,
			icon,
			onClick,
			onMouseEnter
		} = this.props;

		return (
			<div
				onMouseEnter={onMouseEnter}
				onClick={onClick}
				role="button"
				className={styles.button}
			>
				<i className={icon} /> <span title={label}>{label}</span>
			</div>
		);
	}
}

export default SelectBox_Option_MultiLineWithIcon;
