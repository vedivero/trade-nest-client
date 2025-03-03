import { useState } from 'react';
import { MyPageStyle } from './MyPageStyle';

export const MyPage = () => {
   const [activeTab, setActiveTab] = useState<'info' | 'product' | 'communication'>('info');
   const [activeUser, setActiveUser] = useState<keyof typeof messages | null>(null);
   const users = ['아이디1', '아이디2', '아이디3', '아이디4', '아이디5'];

   const messages: { [key: string]: string[] } = {
      아이디1: ['안녕하세요!', '상품 잘 받았습니다.'],
      아이디2: ['거래 가능할까요?', '시간 알려주세요.'],
      아이디3: ['관심 있어요.'],
      아이디4: ['사진 좀 더 볼 수 있을까요?'],
      아이디5: ['가격 조정 가능할까요?', '상태는 어떤가요?'],
   };
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

         {activeTab === 'info' && (
            <div className='form-container'>
               <h2>기본정보</h2>

               <div className='input-group'>
                  <label>아이디</label>
                  <input type='text' placeholder='아이디' />
               </div>

               <div className='input-group'>
                  <label>비밀번호</label>
                  <input type='password' placeholder='비밀번호' />
               </div>

               <div className='input-group'>
                  <label>이메일</label>
                  <input type='email' placeholder='이메일' />
               </div>

               <div className='input-group'>
                  <label>주소</label>
                  <div className='address-search'>
                     <input type='text' placeholder='주소' />
                     <button>주소 검색</button>
                  </div>
               </div>

               <div className='input-group'>
                  <label>상세주소</label>
                  <input type='text' placeholder='상세주소' />
               </div>

               <button className='save-btn'>저장</button>
            </div>
         )}

         {activeTab === 'product' && (
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
         )}

         {activeTab === 'communication' && (
            <div className='communication-container'>
               <div className='user-list'>
                  {users.map((user, index) => (
                     <div
                        key={index}
                        className={`user-item ${activeUser === user ? 'active' : ''}`}
                        onClick={() => setActiveUser(user as keyof typeof messages)}
                     >
                        <strong>{user}</strong>
                        <p>메시지 내용 메시지 내용...</p>
                     </div>
                  ))}
               </div>
               <div className='message-area'>
                  {activeUser ? (
                     messages[activeUser]?.map((msg, idx) => (
                        <div key={idx} className='message'>
                           <p>{msg}</p>
                        </div>
                     ))
                  ) : (
                     <p>유저를 선택해주세요.</p>
                  )}
               </div>
            </div>
         )}
      </MyPageStyle>
   );
};
