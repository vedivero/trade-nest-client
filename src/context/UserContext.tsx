import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface User {
   id: string;
   email: string;
   nickname: string;
}

interface UserContextProps {
   user: User | null;
   setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = useState<User | null>(null);

   const getUserFromCookies = (): User | null => {
      const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
         const [key, value] = cookie.split('=');
         acc[key] = value;
         return acc;
      }, {} as Record<string, string>);

      if (cookies.userInfo) {
         try {
            return JSON.parse(decodeURIComponent(cookies.userInfo));
         } catch (error) {
            console.error('쿠키 파싱 오류:', error);
         }
      }
      return null;
   };

   useEffect(() => {
      const userInfo = getUserFromCookies();
      setUser(userInfo);
   }, []);

   return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
   const context = useContext(UserContext);
   if (!context) {
      throw new Error('useUser는 UserProvider 내에서만 사용할 수 있습니다.');
   }
   return context;
};
