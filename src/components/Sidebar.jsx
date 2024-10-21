import styled from 'styled-components';

export const Sidebar = ({isOPen, setIsOpen}) => {
  return (
    <Container>
      <div className="logoContent">
        Sidebar
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: ${({theme}) => theme.bg};
`;