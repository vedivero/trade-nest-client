import { useEffect, useState } from 'react';
import { ProductTabStyle } from './ProductTabStyle';
import { getAllProducts, getProductsByStatus, updateProductStatus } from '../../../api/myPage.api';
import { Product } from '../../../models/product.model';

export const ProductTab = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [activeStatus, setActiveStatus] = useState<
      'all' | 'available' | 'reserved' | 'completed' | 'stopped'
   >('all');
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);

   const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
         let data: Product[] = [];
         if (activeStatus === 'all') {
            data = await getAllProducts();
         } else {
            data = await getProductsByStatus(activeStatus);
         }

         // ❌ 삭제된 상품을 제외하고 상태 업데이트
         const filteredData = data.filter((product) => product.trade_status !== 'deleted');
         setProducts(filteredData);
      } catch (err) {
         setError('상품 목록을 불러오는데 실패했습니다.');
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchProducts();
   }, [activeStatus]);

   // 🚦 상품 상태 변경 (판매중 / 판매중지 / 삭제)
   const handleUpdateProductStatus = async (
      productId: number,
      productName: string,
      status: 'available' | 'stopped' | 'deleted',
   ) => {
      const action = status === 'available' ? '판매 재개' : status === 'stopped' ? '판매 중지' : '삭제';
      const isConfirmed = window.confirm(`'${productName}' 상품을 ${action}하시겠습니까?`);
      if (isConfirmed) {
         try {
            await updateProductStatus(productId, status);
            alert(`상품이 ${action}되었습니다.`);

            setProducts((prevProducts) =>
               prevProducts
                  .map((product) =>
                     product.id === productId ? { ...product, trade_status: status } : product,
                  )
                  .filter((product) => product.trade_status !== 'deleted'),
            );
         } catch (error) {
            alert(`${action}에 실패했습니다.`);
            console.error(`${action} 실패:`, error);
         }
      }
   };

   const statusLabels = {
      all: '전체',
      available: '판매중',
      reserved: '예약중',
      completed: '판매완료',
      stopped: '판매중지',
      deleted: '삭제됨',
   };

   return (
      <ProductTabStyle>
         <div className='product-container'>
            <h2>상품 관리</h2>
            <div className='status-tabs'>
               {(['all', 'available', 'reserved', 'completed', 'stopped'] as const).map((status) => (
                  <span
                     key={status}
                     className={activeStatus === status ? 'active' : ''}
                     onClick={() => setActiveStatus(status)}
                  >
                     {statusLabels[status]}
                  </span>
               ))}
            </div>

            {loading ? (
               <p>로딩 중...</p>
            ) : error ? (
               <p>{error}</p>
            ) : products.length === 0 ? (
               <p>상품이 없습니다.</p>
            ) : (
               <table>
                  <thead>
                     <tr>
                        <th>상품 이름</th>
                        <th>판매상태</th>
                        <th>가격</th>
                        <th>최근 수정일</th>
                        <th>관리</th>
                     </tr>
                  </thead>
                  <tbody>
                     {products.map((product) => (
                        <tr key={product.id}>
                           <td>{product.product_nm}</td>
                           <td>{statusLabels[product.trade_status]}</td>
                           <td>{product.product_price.toLocaleString()}원</td>
                           <td>{new Date(product.product_reg_date).toLocaleDateString()}</td>
                           <td>
                              {['available', 'stopped'].includes(product.trade_status) && (
                                 <>
                                    {product.trade_status === 'available' && (
                                       <button
                                          className='action-button stop'
                                          onClick={() =>
                                             handleUpdateProductStatus(
                                                product.id,
                                                product.product_nm,
                                                'stopped',
                                             )
                                          }
                                       >
                                          판매 중지
                                       </button>
                                    )}
                                    {product.trade_status === 'stopped' && (
                                       <button
                                          className='action-button resume'
                                          onClick={() =>
                                             handleUpdateProductStatus(
                                                product.id,
                                                product.product_nm,
                                                'available',
                                             )
                                          }
                                       >
                                          판매 재개
                                       </button>
                                    )}
                                    <button
                                       className='action-button delete'
                                       onClick={() =>
                                          handleUpdateProductStatus(product.id, product.product_nm, 'deleted')
                                       }
                                    >
                                       삭제
                                    </button>
                                 </>
                              )}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            )}
         </div>
      </ProductTabStyle>
   );
};
