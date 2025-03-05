import styled from 'styled-components';

export const UserInfoStyle = styled.div`
   fieldset {
      border: 1px solid #ddd;
      padding: 10px 20px;
      margin-bottom: 20px;
      border-radius: 4px;
   }

   legend {
      font-weight: bold;
      padding: 0 5px;
      color: #333;
   }

   .input-group {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
   }

   .pwd-change-btn {
      padding: 5px 10px;
      background-color: #000;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.2s;
   }

   .pwd-change-btn:hover {
      background-color: #555;
   }

   input:disabled {
      background-color: #f1f1f1;
      color: #ccc;
      cursor: not-allowed;
   }

   .error-text {
      color: red;
      font-size: 12px;
      margin: 5px 0 10px 0;
   }

   display: flex;
   flex-direction: column;
   gap: 20px;
   width: 400px;

   .input-group {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 15px;

      label {
         width: 80px;
         text-align: right;
         font-weight: bold;
      }

      input {
         flex: 1;
         padding: 10px;
         border: 1px solid #ccc;
         border-radius: 4px;
      }
   }

   .save-btn {
      width: 100%;
      padding: 15px;
      background-color: black;
      color: white;
      border: none;
      cursor: pointer;
   }

   .pwd-change-btn {
      width: 15%;
      padding: 7.5px;
      background-color: black;
      color: white;
      border: none;
      cursor: pointer;
   }
`;
