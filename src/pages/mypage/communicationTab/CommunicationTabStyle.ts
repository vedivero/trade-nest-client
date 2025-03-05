import styled from 'styled-components';

export const CommunicationStyle = styled.div`
   width: 80%;
   border: 1px solid #ddd;
   height: 500px;
   display: flex;
   flex-direction: column;

   .communication-container {
      display: flex;
      width: 100%;
      height: 100%;
   }

   .user-list {
      width: 30%;
      height: 100%;
      border-right: 1px solid #ddd;
      overflow-y: auto;
      padding: 10px;
      background-color: #f9f9f9;

      .user-item {
         border: 1px solid #ddd;
         padding: 10px;
         margin-bottom: 5px;
         border-radius: 4px;
         cursor: pointer;
         transition: background-color 0.2s;

         &:hover {
            background-color: #eaeaea;
         }

         &.active {
            background-color: #d0e7ff;
            font-weight: bold;
         }
      }
   }

   .message-area {
      width: 70%;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      .message {
         padding: 10px;
         border: 1px solid #ddd;
         margin-bottom: 10px;
         border-radius: 4px;
         background-color: #ffffff;
      }

      p {
         margin: 0;
         color: #555;
      }
   }
`;
