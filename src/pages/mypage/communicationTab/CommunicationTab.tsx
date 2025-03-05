import { useState } from 'react';
import { CommunicationStyle } from './CommunicationTabStyle';

const users = ['아이디1', '아이디2', '아이디3', '아이디4', '아이디5'];
const messages: { [key: string]: string[] } = {
   아이디1: ['안녕하세요!', '상품 잘 받았습니다.'],
   아이디2: ['거래 가능할까요?', '시간 알려주세요.'],
   아이디3: ['관심 있어요.'],
   아이디4: ['사진 좀 더 볼 수 있을까요?'],
   아이디5: ['가격 조정 가능할까요?', '상태는 어떤가요?'],
};

export const CommunicationTab = () => {
   const [activeUser, setActiveUser] = useState<string | null>(null);

   return (
      <CommunicationStyle>
         <div className='communication-container'>
            <div className='user-list'>
               {users.map((user, index) => (
                  <div
                     key={index}
                     className={`user-item ${activeUser === user ? 'active' : ''}`}
                     onClick={() => setActiveUser(user)}
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
      </CommunicationStyle>
   );
};
