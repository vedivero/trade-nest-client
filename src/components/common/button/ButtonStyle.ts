import styled from 'styled-components';
import { ButtonProps } from './Button';

const ButtonStyle = styled.button<Omit<ButtonProps, 'children'>>`
   font-size: ${({ theme, size }) => theme.button[size].fontSize};
   padding: ${({ theme, size }) => theme.button[size].padding};
   color: ${({ theme, schema }) => theme.buttonSchema[schema].color};
   background-color: ${({ theme, schema }) => theme.buttonSchema[schema].backgroundColor};
   border: 0;
   border-radius: ${({ theme }) => theme.borderRadius.default};
   opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
   pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
   cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;

export default ButtonStyle;
