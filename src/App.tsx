import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from "./pages/UserList";
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<UserList/>}></Route>
        </Routes>
      </Router>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export default App;