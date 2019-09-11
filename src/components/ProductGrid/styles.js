import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledProductGrid = styled.div`
	padding: 40px;
	border: 1px solid #888;
	margin-bottom: 20px;
`;

export const StyledHeading = styled.h2`
	margin: 0 0 20px 0;
`;

export const Grid = styled.ul`
	list-style-type: none;
	margin: 0;
	margin-top: 50px;
	padding: 0;
	display: flex;
    flex-wrap: wrap;

	&::after {
		clear: both;
		content: '';
		display: table;
	}
`;

export const Item = styled.li`
	box-sizing: border-box;
	float: left;
	padding: 0;
	width: 25%;
`;

export const ItemLink = styled(Link)`
	color: black;
	display: block;
	padding: 10px;
	text-decoration: none;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #eee;
	}
`;

export const ItemImage = styled.img`
	height: 180px;
	object-fit: cover;
	width: 100%;
`;

export const ItemHeading = styled.h3`
	margin-bottom: 0;
`;
