import { ProductTabStyle } from './ProductTabStyle';

export const ProductTab = () => {
   return (
      <ProductTabStyle>
         <div className='product-container'>
            <h2>판매하기</h2>
            <div className='status-tabs'>
               <span className='active'>전체</span>
               <span>판매중</span>
               <span>예약중</span>
               <span>판매완료</span>
            </div>
            <table>
               <thead>
                  <tr>
                     <th>사진</th>
                     <th>판매상태</th>
                     <th>가격</th>
                     <th>최근수정일</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>이미지</td>
                     <td>판매완료</td>
                     <td>10,000원</td>
                     <td>2025년 01월 01일</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </ProductTabStyle>
   );
};
