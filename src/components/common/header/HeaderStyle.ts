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
      justify-content: left; /* 로고를 정확히 중앙에 위치시킴 */
      width: 100%;
      max-width: ${({ theme }) => theme.layout.width.large};
      padding: 0 1rem;
      position: relative;

      .logo {
         flex-grow: 0; /* 로고가 중앙에서 확장되지 않도록 설정 */
         text-align: center;
         img {
            height: 70px; /* 로고 크기 */
         }
      }

      .auth-buttons {
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         align-items: flex-end;
         gap: 0.5rem;
         position: absolute;
         bottom: 0;
         right: 1rem;

         .user-actions {
            display: flex;
            align-items: center;
            gap: 12px;
            background: rgba(255, 255, 255, 0.1);
            padding: 8px 16px;
            border-radius: 8px;

            .user-info {
               font-size: 14px;
               font-weight: bold;
               color: #333;
            }

            button {
               padding: 6px 10px;
               font-size: 12px;
               border-radius: 6px;
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
