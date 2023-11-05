import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SelectBox_Option_MultiLineWithIcon from "./SelectBox_Option_MultiLineWithIcon";

class OptionWithIcon extends PureComponent {
	static propTypes = {
		option: PropTypes.shape({
			label: PropTypes.string.isRequired,
			loaderUri: PropTypes.string.isRequired,
			icon: PropTypes.string,
		}),
	};

	render() {
		const { option } = this.props;

		return (
			<SelectBox_Option_MultiLineWithIcon
				{...this.props}
				label={option.label}
				icon={option.icon}
			/>
		);
	}
}

export default OptionWithIcon;
