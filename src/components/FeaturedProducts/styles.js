import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;

	&::after {
		clear: both;
		content: '';
		display: table;
	}
`;

export const ProductImage = styled.img`
	box-sizing: border-box;
	height: 300px;
	object-fit: cover;
	width: 100%;
`;

export const ProductTitle = styled.h3`
	font-size: 20px;
	margin: 10px 0;
`;

export const ProductPrice = styled.p`
	font-size: 20px;
	margin: 0;
`;

export const ProductLink = styled(Link)`
	box-sizing: border-box;
	color: black;
	display: block;
	float: left;
	padding: 10px;
	text-decoration: none;
	width: 33.3333%;

	&:hover {
		box-shadow: 0px 5px 10px 0px #d8d8d8;
	}
`;

export const ProductFeatures = styled.ul`
	margin-top: 10px;
	padding-left: 20px;
`;
