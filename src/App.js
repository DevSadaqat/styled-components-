import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled'
import Header from './components/Header';
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <Header></Header>
        <Container>
          <h1>Styled Components in React</h1> 
        </Container> 
      </>
    </ThemeProvider>
  );
}

export default App;
