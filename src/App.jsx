import { createContext, useState } from 'react';
import {RoutersApp} from './routers/Routers';
import styled, {ThemeProvider} from 'styled-components';
import {Light, Dark} from './styles/Them';
import { Sidebar } from './components/Sidebar';

export const themeLayout = createContext(null);

export const App = () => {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(true);
  const themeStyle = theme === 'light' ? Light : Dark;

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <themeLayout.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={themeStyle}>
    <Container className={isOpen ? "active" : null}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <RoutersApp />
    </Container>
    </ThemeProvider>
    </themeLayout.Provider>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({theme}) => theme.bgtotal};

  &.active {
    grid-template-columns: 300px auto; 
  }

`;