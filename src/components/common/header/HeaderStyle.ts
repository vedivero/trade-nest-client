// Header.css
import { styled } from 'styled-components';

const HeaderStyle = styled.header`
   background-color: ${({ theme }) => theme.color.background};

   h1 {
      color: ${({ theme }) => theme.color.primary};
   }
`;

export default HeaderStyle;
