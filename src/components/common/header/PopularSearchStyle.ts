import styled from 'styled-components';

export const PopularSearchStyle = styled.div`
   display: flex;
   align-items: center;
   gap: 12px;
   font-size: 14px;
   color: #555;
   width: 100%; /* 부모 요소가 전체 너비를 차지하도록 설정 */
   max-width: 450px;

   .label {
      font-weight: bold;
      color: #333;
   }

   .keywords {
      display: flex;
      gap: 10px;
      flex-wrap: wrap; /* 줄바꿈 가능하도록 설정 */
      user-select: none;
   }

   .popular-keyword {
      cursor: pointer;
      text-decoration: underline;
      color: #666;
      transition: color 0.2s ease-in-out, font-weight 0.2s ease-in-out;

      &:hover {
         font-weight: 900;
         color: rgb(3, 77, 156);
      }
   }
`;
