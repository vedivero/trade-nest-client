import styled from 'styled-components';

export const ProductTabStyle = styled.div`
   width: 800px;

   h2 {
      margin-bottom: 20px;
   }

   .status-tabs {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
      margin-bottom: 20px;

      span {
         cursor: pointer;
         padding: 5px 10px;
         border-radius: 5px;

         &.active {
            color: red;
            font-weight: bold;
         }
      }
   }

   table {
      width: 100%;
      border-collapse: collapse;

      th,
      td {
         border: 1px solid #ddd;
         padding: 10px;
         text-align: center;
      }

      th {
         background-color: #f5f5f5;
         font-weight: bold;
      }
   }
`;
