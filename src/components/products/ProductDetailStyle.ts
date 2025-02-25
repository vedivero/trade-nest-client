import styled from 'styled-components';

export const ProductDetailStyle = styled.div`
   .header {
      display: flex;
      align-items: start;
      gap: 24px;
      padding: 0 0 24px 0;

      .img {
         flex: 1;
         img {
            width: 100%;
            height: auto;
         }
      }

      .info {
         flex: 1;
         display: flex;
         flex-direction: column;
         gap: 12px;
         margin-left: 40px;
         dl {
            display: flex;
            margin: 0;
            dt {
               width: 100px;
            }
         }
      }
   }

   .product-buttons {
      display: flex;
      justify-content: flex-start;
      gap: 20px;
      margin-top: 20px;
      padding: 10px;
      border-top: 1px solidrgb(221, 201, 221);
      /* background-color: rgb(222, 221, 221); */
   }

   .product-buttons button {
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
      border: none;
   }

   .like-button {
      background: rgb(0, 0, 0);
      border: 1px solid rgb(0, 0, 0);
      color: rgb(255, 255, 255);
   }

   .like-button.liked {
      background: #ff4d4f;
      color: #fff;
   }

   .chat-button {
      background: rgb(2, 123, 179);
      color: white;
   }

   .buy-button {
      background: rgb(2, 115, 5);
      color: white;
   }

   .chat-button:hover {
      background: #ec971f;
   }

   .buy-button:hover {
      background: #c9302c;
   }
`;
