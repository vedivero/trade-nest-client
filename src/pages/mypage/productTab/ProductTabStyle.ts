import styled from 'styled-components';

export const ProductTabStyle = styled.div`
   width: 800px;
   margin: 0 auto;
   padding: 20px;

   h2 {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
      color: #333;
   }

   .status-tabs {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
      margin-bottom: 20px;

      span {
         cursor: pointer;
         padding: 8px 15px;
         border-radius: 20px;
         border: 1px solid #ddd;
         background-color: #f9f9f9;
         transition: all 0.2s;
         color: #555;

         &:hover {
            background-color: #eaeaea;
         }

         &.active {
            color: #fff;
            background-color: #e74c3c;
            border-color: #e74c3c;
            font-weight: bold;
         }
      }
   }

   table {
      width: 100%;
      border-collapse: collapse;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      th,
      td {
         border: 1px solid #ddd;
         padding: 12px;
         text-align: center;
         font-size: 14px;
         color: #333;
      }

      th {
         background-color: #f5f5f5;
         font-weight: 600;
         color: #555;
      }

      tr:nth-child(even) {
         background-color: #f9f9f9;
      }

      .action-button {
         padding: 5px 10px;
         border: none;
         border-radius: 5px;
         cursor: pointer;
         margin: 0 5px;
         font-size: 13px;
         transition: all 0.2s;
      }

      .action-button.stop {
         background-color: #3498db;
         color: #fff;

         &:hover {
            background-color: #2980b9;
         }
      }

      .action-button.delete {
         background-color: #e74c3c;
         color: #fff;

         &:hover {
            background-color: #c0392b;
         }
      }
   }
`;
