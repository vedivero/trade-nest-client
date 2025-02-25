import styled from 'styled-components';

export const LayoutStyle = styled.div`
   width: 100%;
   max-width: ${({ theme }) => theme.layout.width.large};
   margin: 0 auto;
   padding: 20px 0;
`;
