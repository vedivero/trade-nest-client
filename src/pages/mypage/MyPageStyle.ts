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
      margin: 0 auto 20px;

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

         &.active {
            color: #000;
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

   /* 내 정보 관리 스타일 */
   .form-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 400px;

      label {
         display: flex;
         align-items: center;
         font-weight: bold;
         margin-bottom: 10px;
      }

      .input-group {
         display: flex;
         align-items: center;
         gap: 20px;
         margin-bottom: 15px;

         label {
            width: 80px;
            text-align: right;
         }

         input[type='text'],
         input[type='password'],
         input[type='email'] {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
         }
      }

      .address-search {
         display: flex;
         gap: 10px;

         input[type='text'] {
            flex: 1;
         }

         button {
            padding: 10px;
            background-color: black;
            color: white;
            border: none;
            cursor: pointer;
         }
      }

      button.save-btn {
         width: 100%;
         padding: 15px;
         background-color: black;
         color: white;
         border: none;
         cursor: pointer;
         margin-top: 30px;
      }
   }

   /* 상품 관리 스타일 */
   .product-container {
      width: 800px;

      h2 {
         margin-bottom: 20px;
      }

      .status-tabs {
         display: flex;
         justify-content: flex-end;
         gap: 15px;
         margin-bottom: 20px;

         span {
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 5px;

            &.active {
               color: red;
               font-weight: bold;
            }
         }
      }

      table {
         width: 100%;
         border-collapse: collapse;

         th,
         td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
         }

         th {
            background-color: #f5f5f5;
            font-weight: bold;
         }
      }
   }

   /* 커뮤니케이션 스타일 */
   .communication-container {
      display: flex;
      width: 80%;
      border: 1px solid #ddd;
      height: 500px;

      .user-list {
         width: 30%;
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
   }
`;
