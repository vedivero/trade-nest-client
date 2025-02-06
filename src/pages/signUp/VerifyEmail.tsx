import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../../api/auth.api';
import { useAlert } from '../../hooks/useAlert';

const VerifyEmail = () => {
   const [searchParams] = useSearchParams();
   const token = searchParams.get('token');
   const navigate = useNavigate();
   const showAlert = useAlert();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (!token) {
         showAlert('잘못된 접근입니다.');
         navigate('/');
         return;
      }

      verifyEmail(token)
         .then((response) => {
            switch (response.data.status) {
               case 'success':
                  showAlert('이메일 인증이 완료되었습니다.');
                  navigate('/');
                  break;
               case 'already-verified':
                  showAlert('이미 인증된 사용자입니다.');
                  navigate('/login');
                  break;
               case 'invalid':
               default:
                  showAlert('유효하지 않은 토큰입니다.');
                  navigate('/');
            }
         })
         .catch(() => {
            showAlert('이메일 인증 처리 중 오류가 발생했습니다.');
            navigate('/');
         })
         .finally(() => setLoading(false));
   }, [token, navigate, showAlert]);

   return <div>{loading ? '이메일 인증 중...' : '이메일 인증이 완료되었습니다.'}</div>;
};

export default VerifyEmail;
