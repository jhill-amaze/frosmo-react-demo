import styled from 'styled-components';
import Text from '../Text';

export const ProductImage = styled.img`
	width: 100%;
`;

export const Column = styled.div`
	box-sizing: border-box;
	float: left;
	padding: 0 20px;
	width: 50%;
`;

export const Price = styled.p`
	font-size: 20px;
`;

export const Features = styled.ul`
	padding-left: 20px;

	li {
		padding: 5px 0;
	}
`;

export const Address = styled(Text)`
	margin-top: 20px;
`;
