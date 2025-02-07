import styled from 'styled-components';

export const LoginStyle = styled.div`
   max-width: ${({ theme }) => theme.layout.width.small};
   margin: 80px auto; //상하 마진 80, 좌우마진 auto = 가운데 정렬

   fieldset {
      border: 0;
      padding: 0 0 8px 0;
      .error-text {
         color: red;
      }
   }
   input {
      width: 100%;
   }
   button {
      width: 100%;
   }

   .info {
      text-align: center;
      padding: 16px 0 0 0;
      display: flex;
      justify-content: center;
      gap: 16px;
   }

   .social-login button {
      margin-bottom: 8px; // 버튼 간의 여백 추가
   }

   &:hover {
      opacity: 0.9; // 약간 어두워짐
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 그림자 효과 추가
   }
`;
