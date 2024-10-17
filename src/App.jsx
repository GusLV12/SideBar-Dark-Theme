import { createContext, useState } from 'react';
import {RoutersApp} from './routers/Routers';
import styled, {ThemeProvider} from 'styled-components';
import {Light, Dark} from './styles/Them';

export const themeLayout = createContext(null);

export const App = () => {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);
  const themeStyle = theme === 'light' ? Light : Dark;

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <themeLayout.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={themeStyle}>
    <Container>
      <main className={isOpen ? "sidebarState active" : "sidebarState"}>
      <RoutersApp />
      </main>
    </Container>
    </ThemeProvider>
    </themeLayout.Provider>
  );
};

const Container = styled.div`
  .sidebarState{
  display: flex;
  grid-template-columns: 90px auto;
  background: ${({theme}) => theme.bgtotal};

  &.active {
    grid-template-columns: 300px auto; 
  }
  }

`;