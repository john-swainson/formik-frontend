import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RegisterForm, UserSubmission } from "./components";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const user = useSelector((state) => state.user);

  return (
    <StyledApp>
      {isEmpty(user) ? (
        <RegisterForm />
      ) : (
        <UserSubmission user={user} />
      )}
    </StyledApp>
  );
}

export default App;
