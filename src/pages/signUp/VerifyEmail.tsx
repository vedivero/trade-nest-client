import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../../api/auth.api';
import { useAlert } from '../../hooks/useAlert';
import { useUser } from '../../context/UserContext';

const VerifyEmail = () => {
   const [searchParams] = useSearchParams();
   const emailToken = searchParams.get('emailToken');
   const navigate = useNavigate();
   const showAlert = useAlert();
   const [loading, setLoading] = useState(true);
   const { user, setUser } = useUser();

   useEffect(() => {
      if (!emailToken) {
         showAlert('잘못된 접근입니다.');
         navigate('/');
         return;
      }

      verifyEmail(emailToken)
         .then((response) => {
            const { status, user } = response;

            if (status === 'success') {
               showAlert('이메일 인증이 완료되었습니다.');
               setUser({
                  id: user.id,
                  email: user.email,
                  nickname: user.nickname,
               });
               navigate('/');
            } else {
               showAlert('유효하지 않은 토큰입니다.');
               navigate('/');
            }
         })
         .catch((error) => {
            console.error('이메일 인증 요청 실패 : ', error);
            showAlert('이메일 인증 처리 중 오류가 발생했습니다.');
            navigate('/');
         })
         .finally(() => setLoading(false));
   }, [emailToken, navigate, showAlert, setUser]);

   return <div>{loading ? '이메일 인증 중...' : '이메일 인증이 완료되었습니다.'}</div>;
};

export default VerifyEmail;
