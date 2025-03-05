export interface User {
   id: number;
   user_id: string;
   social_id: string;
   social_provider: string;
   email: string;
   nickname: string;
   profile_image: string | null;
   reg_date: string;
   addr: string | null;
   rating: number;
   verified: boolean;
   emailToken: string;
   location: string;
}
