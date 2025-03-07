export interface Product {
   id: number;
   product_no: string;
   product_nm: string;
   product_price: number;
   product_category: string;
   product_desc: string;
   product_condition: string;
   product_img: string;
   product_reg_date: string;
   expiry_date?: string;
   view_cnt: number;
   favorite_cnt: number;
   isFavorited?: boolean;
   seller_id: number;
   trade_loc: string;
   trade_status: 'available' | 'reserved' | 'completed' | 'stopped' | 'deleted';
   trade_complete_date?: string;
   trade_method: string;
   buyer_id?: number | null;
}
