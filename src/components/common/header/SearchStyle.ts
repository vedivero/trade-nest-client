import styled from 'styled-components';

export const SearchStyle = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;

   input {
      width: 200px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
   }

   button {
      padding: 8px 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
         background-color: #0056b3;
      }
   }
`;
