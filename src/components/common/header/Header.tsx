import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderStyle from './HeaderStyle';
import logo_light from '../../../assets/images/trade_nest_light.jpg';
import logo_dark from '../../../assets/images/trade_nest_dark.jpg';
import Button from '../../common/button/Button';
import { ThemeContext } from '../../../context/ThemeContext';
import { useUser } from '../../../context/UserContext';
import { logout } from '../../../api/auth.api';
import { PopularSearch } from './PopularSearch';
import { Search } from './Search';

const Header = () => {
   const { themeName } = useContext(ThemeContext);
   const navigate = useNavigate();
   const { user, setUser } = useUser();

   const handleAuthClick = () => {
      navigate('/login');
   };

   const handleMyPageClick = () => {
      navigate('/mypage');
   };

   const handleLogout = async () => {
      await logout();
      setUser(null);
      window.location.reload();
   };

   return (
      <HeaderStyle>
         <div className='header-container'>
            <h1 className='logo'>
               <img
                  src={themeName === 'light' ? logo_light : logo_dark}
                  alt='trade nest'
                  onClick={() => (window.location.href = '/')}
                  style={{ cursor: 'pointer' }}
               />
            </h1>
            <div className='search-container'>
               <Search />
               <PopularSearch />
            </div>

            <div className='auth-buttons'>
               {user && user.nickname ? (
                  <div className='user-actions'>
                     <span className='user-info'>
                        👋 <strong>{user.nickname}</strong>님, 환영합니다!
                     </span>
                     <div className='button-group'>
                        <Button size='small' schema='normal' onClick={handleMyPageClick}>
                           마이페이지
                        </Button>
                        <Button size='small' schema='normal' onClick={handleLogout}>
                           로그아웃
                        </Button>
                     </div>
                  </div>
               ) : (
                  <Button size='small' schema='normal' onClick={handleAuthClick}>
                     로그인
                  </Button>
               )}
            </div>
         </div>
      </HeaderStyle>
   );
};

export default Header;
