import styled from 'styled-components';

export const MyPageStyle = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 50px 0;

   .tab-header {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      border-bottom: 2px solid #ddd;
      width: 100%;
      max-width: 600px;

      .tab-button {
         flex: 1;
         padding: 15px 0;
         border: none;
         background: none;
         font-size: 18px;
         color: #888;
         cursor: pointer;
         transition: color 0.3s, font-weight 0.3s;

         &:hover,
         &.active {
            color: #000;
            font-weight: bold;
         }
      }

      .tab-indicator {
         position: absolute;
         bottom: -2px;
         width: 33.3%;
         height: 2px;
         background-color: #000;
         transition: transform 0.3s ease;
      }
   }
`;
