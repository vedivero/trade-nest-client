import styled from 'styled-components';
import { ButtonProps } from './Button';

const ButtonStyle = styled.button<Omit<ButtonProps, 'children'>>`
   font-size: ${({ theme, size }) => theme.button[size].fontSize};
   padding: ${({ theme, size }) => theme.button[size].padding};
   color: ${({ theme, schema }) =>
      schema === 'kakao'
         ? '#000'
         : schema === 'naver'
         ? '#fff'
         : schema === 'google'
         ? '#fff'
         : theme.buttonSchema[schema].color};
   background-color: ${({ theme, schema }) =>
      schema === 'kakao'
         ? '#fee500'
         : schema === 'naver'
         ? '#03c75a'
         : schema === 'google'
         ? '#4285f4'
         : theme.buttonSchema[schema].backgroundColor};
   border: 0;
   border-radius: ${({ theme }) => theme.borderRadius.default};
   opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
   pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
   cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;

export default ButtonStyle;
