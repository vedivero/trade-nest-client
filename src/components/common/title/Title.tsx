import { ColorKey, HeadingSize } from '../../../style/theme';
import TitleStyle from './TitleStyle';

export interface TitleProps {
   children: React.ReactNode;
   size: HeadingSize;
   color?: ColorKey;
}

const Title = ({ children, size, color }: TitleProps) => {
   return (
      <TitleStyle size={size} color={color}>
         {children}
      </TitleStyle>
   );
};

export default Title;
