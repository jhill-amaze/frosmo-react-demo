import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
	${({ noSpace }) => noSpace && css`
		margin: 0;
	`}
`;
