import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from './styles';

const Text = ({ className, content, noSpace, root }) => {
	const Tag = root ?
		({ className, children }) => <div className={className}>{children}</div>
		:
		({ children }) => <Fragment>{children}</Fragment>;

	return (
		<Tag className={className}>
			{
				content.map((part, index) => {
					if (part.nodeType === 'paragraph') {
						return (
							<Paragraph noSpace={noSpace} key={index}>
								<Text content={part.content} root={false} />
							</Paragraph>
						);
					} else if (part.nodeType === 'text') {
						return part.value;
					}
				})
			}
		</Tag>
	);
};

Text.propTypes = {
	content: PropTypes.array,
	noSpace: PropTypes.bool,
	className: PropTypes.string,
	root: PropTypes.bool,
};

Text.defaultProps = {
	content: [],
	noSpace: false,
	className: '',
	root: true,
};

export default Text;
