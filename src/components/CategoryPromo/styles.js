import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCategoryPromo = styled.div`
	background-color: #c3f7ff;
	padding: 40px;
	margin-bottom: 20px;
	border: 1px solid #888;
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
	width: 33%;
`;

export const ItemLink = styled(Link)`
	color: black;
	display: block;
	padding: 10px;
	text-decoration: none;
`;

export const ItemImage = styled.img`
	height: 180px;
	object-fit: cover;
	width: 100%;
`;

export const ItemHeading = styled.h3`
	margin: 0 0 20px 0;
`;
