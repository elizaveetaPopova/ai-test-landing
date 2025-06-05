import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Routes } from 'react-router';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
