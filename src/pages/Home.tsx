import Button from '../components/common/button/Button';
import InputText from '../components/common/inputText/InputText';
import Title from '../components/common/title/Title';

const Home = () => {
   return (
      <>
         <Title size='medium' color='background'>
            Title
         </Title>
         <Button size='large' schema='primary'>
            Button Test
         </Button>
         <InputText placeholder='여기에 입력하세요' />
         <h1>Home body</h1>
      </>
   );
};

export default Home;
