import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledMain } from './styles';

const Layout = ({ children }) => (
	<Fragment>
		<StyledHeader>
			<Link to="/">
				<h1>WrongMove</h1>
			</Link>
			<ul>
				<li>Buy</li>
				<li>Rent</li>
			</ul>
		</StyledHeader>
		<StyledMain>{children}</StyledMain>
	</Fragment>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
