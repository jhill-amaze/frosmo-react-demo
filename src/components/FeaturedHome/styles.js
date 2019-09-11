import styled from 'styled-components';
//import { Link } from 'react-router-dom';

export const StyledFeaturedHome = styled.div`
	padding: 40px;
	margin-bottom: 20px;
	border: 1px solid #888;
`;

export const StyledHeading = styled.h2`
	margin: 0 0 40px 0;
`;

export const CTA = styled.a`
	background-color: #14ec14;
	border-radius: 5px;
	color: black;
	cursor: pointer;
	display: inline-block;
	font-size: 18px;
	margin: 20px 0 0 20px;
	padding: 10px 20px;
	position: relative;
	text-decoration: none;

	&:hover {
		background-color: #19e419;
	}

	&::before {
		background-color: #12dc12;
		border-radius: 5px;
		content: '';
		height: 100%;
		left: 0;
		position: absolute;
		top: 5px;
		width: 100%;
		z-index: -1;
	}
`;

export const ImageWrapper = styled.div`
	box-sizing: border-box;
	display: inline-block;
	padding: 0;
	vertical-align: top;
	width: 50%;
`;

export const Image = styled.img`
	width: 100%;
`;

export const Content = styled.div`
	box-sizing: border-box;
	display: inline-block;
	padding: 20px 20px 20px 30px;
	vertical-align: top;
	width: 50%;
`;

export const Heading = styled.h3`
	font-size: 24px;
	margin: 0;
	margin-bottom: 10px;
`;

export const Price = styled.p`
	font-size: 20px;
	margin: 0;
`;
