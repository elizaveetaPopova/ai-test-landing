import { Button, Container, Title } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Container>
      <Title>Добро пожаловать!</Title>
      {/* 
      <Text>Нажмите кнопку ниже, чтобы начать тестирование.</Text> */}
      <Button>Начать тест</Button>
    </Container>
  );
};

export default WelcomePage;
