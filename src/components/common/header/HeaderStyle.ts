import styled from 'styled-components';

const HeaderStyle = styled.header`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 1rem 0;
   border-bottom: 1px solid ${({ theme }) => theme.color.border};

   .header-container {
      display: flex;
      align-items: center;
      justify-content: left;
      width: 100%;
      max-width: ${({ theme }) => theme.layout.width.large};
      padding: 0 1rem;
      position: relative;

      .logo {
         flex-grow: 0;
         text-align: center;
         img {
            height: 70px;
         }
      }

      .auth-buttons {
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         align-items: flex-end;
         gap: 0.5rem;
         position: absolute;
         top: 10px;
         right: 1rem;

         .user-actions {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 8px;

            .user-info {
               font-size: 14px;
               font-weight: bold;
               color: #333;
            }

            .button-group {
               display: flex;
               flex-direction: row;
               gap: 8px;
            }
         }
      }

      .search-container {
         display: flex;
         flex-direction: column;
         align-items: center;
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
         top: 20px;
      }
   }

   button {
      padding: 8px 12px;
      background-color: rgb(3, 83, 169);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
         background-color: rgb(118, 180, 246);
      }
   }
`;

export default HeaderStyle;
