import { styled } from 'styled-components';
import { TitleProps } from './Title';

const TitleStyle = styled.h1<Omit<TitleProps, 'children'>>`
   font-size: ${({ theme, size }) => theme.heading[size].fontSize};
   color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.primary)};
`;

export default TitleStyle;
