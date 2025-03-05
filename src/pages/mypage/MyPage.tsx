import { useState, useEffect } from 'react';
import { MyPageStyle } from './MyPageStyle';
import { CommunicationTab } from './communicationTab/CommunicationTab';
import { ProductTab } from './productTab/ProductTab';
import { UserInfoTab } from './userInfoTab/UserInfo';
import { getUserInfo } from '../../api/myPage.api';
import { User } from '../../models/user.model';

export const MyPage = () => {
   const [activeTab, setActiveTab] = useState<'info' | 'product' | 'communication'>('info');
   const [userData, setUserData] = useState<User | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      if (activeTab === 'info' && !userData) {
         const fetchUserInfo = async () => {
            try {
               setLoading(true);
               const data = await getUserInfo();

               if (data) {
                  setUserData(data);
               } else {
                  setUserData(null);
               }
            } catch (err) {
               setError('유저 정보를 불러오는데 실패했습니다.');
            } finally {
               setLoading(false);
            }
         };

         fetchUserInfo();
      }
   }, [activeTab, userData]);

   return (
      <MyPageStyle>
         <div className='tab-header'>
            <button
               className={`tab-button ${activeTab === 'info' ? 'active' : ''}`}
               onClick={() => setActiveTab('info')}
            >
               내 정보 관리
            </button>
            <button
               className={`tab-button ${activeTab === 'product' ? 'active' : ''}`}
               onClick={() => setActiveTab('product')}
            >
               상품관리
            </button>
            <button
               className={`tab-button ${activeTab === 'communication' ? 'active' : ''}`}
               onClick={() => setActiveTab('communication')}
            >
               커뮤니케이션
            </button>
            <div
               className='tab-indicator'
               style={{
                  transform: `translateX(${['info', 'product', 'communication'].indexOf(activeTab) * 100}%)`,
               }}
            />
         </div>

         {activeTab === 'info' &&
            (loading ? <p>로딩 중...</p> : error ? <p>{error}</p> : <UserInfoTab userData={userData} />)}
         {activeTab === 'product' && <ProductTab />}
         {activeTab === 'communication' && <CommunicationTab />}
      </MyPageStyle>
   );
};
