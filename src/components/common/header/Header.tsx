import HeaderStyle from './HeaderStyle';
import logo_light from '../../../assets/images/trade_nest_light.jpg';
import logo_dark from '../../../assets/images/trade_nest_dark.jpg';
import Button from '../../common/button/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
   const { themeName } = useContext(ThemeContext);
   const navigate = useNavigate();

   const handleAuthClick = () => {
      navigate('/login');
   };

   return (
      <HeaderStyle>
         <div className='header-container'>
            <h1 className='logo'>
               <img src={themeName === 'light' ? logo_light : logo_dark} alt='trade nest' />
            </h1>
            <div className='auth-buttons'>
               <Button size='small' schema='normal' onClick={handleAuthClick}>
                  로그인 / 회원가입
               </Button>
            </div>
         </div>
      </HeaderStyle>
   );
};

export default Header;
