import styled from 'styled-components';

export const ProductItemStyle = styled.div`
   padding: 12px;
   display: flex;
   flex-direction: column;
   align-items: center;
   box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
   width: 220px;
   text-align: left;
   border-radius: ${({ theme }) => theme.borderRadius.default};
   background-color: ${({ theme }) => theme.color.background};
   overflow: hidden;
   height: 340px; /* 전체 높이 조정 */
   position: relative;

   .img {
      width: 100%;
      height: 200px;
      background-color: #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${({ theme }) => theme.borderRadius.default};
      overflow: hidden;

      img {
         width: 100%;
         height: 100%;
         object-fit: contain;
      }
   }
   .category-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      background-color: ${({ theme }) => theme.color.text};
      color: #fff;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 16px;
      display: inline-block;
   }
   .content {
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex-grow: 1;

      .title {
         width: 200px;
         font-size: 1rem;
         font-weight: 700;
         height: 24px;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
      }

      .desc {
         font-size: 0.85rem;
         color: ${({ theme }) => theme.color.secondary};
         height: 42px;
         overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: 2; /* 최대 2줄 */
         -webkit-box-orient: vertical;
         text-align: left;
      }

      .seller {
         display: none; /* 아이디 숨기기 */
      }

      .bottom-section {
         display: flex;
         justify-content: space-between;
         align-items: center;
         width: 100%;
         margin-top: auto;
         padding-bottom: 4px;
         height: 10px;
         .price {
            font-size: 1rem;
            font-weight: 700;
            color: ${({ theme }) => theme.color.primary};
            text-align: left;
         }

         .favorite {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 0.9rem;
            color: ${({ theme }) => theme.color.primary};
            font-weight: 700;
            border: 1px solid ${({ theme }) => theme.color.border};
            border-radius: ${({ theme }) => theme.borderRadius.default};
            padding: 2px 6px;

            svg {
               color: ${({ theme }) => theme.color.primary};
            }
         }
      }
   }
`;
