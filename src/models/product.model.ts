export interface Product {
   id: number; // 백엔드에는 ID가 있음
   product_no: string; // 상품 번호 (백엔드에서 존재)
   product_nm: string; // 상품 이름
   product_price: number; // 상품 가격
   product_category: string; //상품 카테고리
   product_desc: string; // 상품 상세 설명
   product_condition: string; // 상품 상태 (new, used, damaged)
   product_img: string; // 상품 이미지 URL
   product_reg_date: string; // 상품 등록일
   expiry_date?: string; // 등록 만료일 (선택적)
   view_cnt: number; // 조회 수
   favorite_cnt: number; // 좋아요 수
   isFavorited?: boolean; // 로그인한 사용자가 찜했는지 여부
   seller_id: number; // 판매자 ID (User 참조)
   trade_loc: string; // 거래 희망 장소
   trade_status: 'available' | 'reserved' | 'completed' | 'stopped'; // 거래 상태 (판매중, 예약중, 판매완료, 판매중지 )
   trade_complete_date?: string; // 거래 완료 날짜 (선택적)
   trade_method: string; // 거래 방식 (직거래, 택배 거래 등)
   buyer_id?: number | null; // 구매자 ID (선택적)
}
