import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: #000;
	color: #fff;
	box-shadow: 0px 1px 7px 0px #bbb;
	margin-bottom: 40px;
	padding: 20px;

	h1, ul, li {
		display: inline-block;
	}

	h1 {
		color: #fff;
		font-size: 24px;
		margin: 0;
		margin-right: 50px;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li {
		color: #fff;
		margin-right: 20px;

		&:hover {
			cursor: pointer;
			text-decoration: underline;
		}
	}
`;

export const StyledMain = styled.main`
	padding: 0 20px;
`;
