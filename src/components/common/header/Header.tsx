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
                  onClick={() => navigate('/')}
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
                     <span className='user-info'>안녕하세요, {user.nickname}님!</span>
                     <Button size='small' schema='normal' onClick={handleLogout}>
                        로그아웃
                     </Button>
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
