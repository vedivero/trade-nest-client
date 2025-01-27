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
      justify-content: center; /* 로고를 정확히 중앙에 위치시킴 */
      width: 100%;
      max-width: ${({ theme }) => theme.layout.width.large};
      padding: 0 1rem;
      position: relative; /* auth-buttons의 위치 조정을 위해 relative 추가 */

      .logo {
         flex-grow: 0; /* 로고가 중앙에서 확장되지 않도록 설정 */
         text-align: center;
         img {
            height: 150px; /* 로고 크기 */
         }
      }

      .auth-buttons {
         display: flex;
         flex-direction: column; /* 버튼을 세로로 정렬 */
         justify-content: flex-end; /* 하단 정렬 */
         align-items: flex-end; /* 오른쪽 정렬 */
         gap: 0.5rem;
         position: absolute; /* 부모 컨테이너 기준으로 위치 고정 */
         bottom: 0; /* 하단에 배치 */
         right: 1rem; /* 오른쪽 여백 */

         button {
            padding: 0.5rem 1rem;
         }
      }
   }
`;

export default HeaderStyle;
