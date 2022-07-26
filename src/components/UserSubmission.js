import { isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import sampleData from "../assets/jsons/sample.json";
import { reset } from "../store/feature/user";
import { Button } from "./atoms";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledWrapper = styled.div`
  display: grid;
  gap: 16px;

  ${breakpoint("md")`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
`;

const StyledSpan = styled.span`
  font-size: 1.2rem;
`;

const UserSubmission = ({ user }) => {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(reset());
  };

  return (
    <StyledContainer>
      <h1>Thanks for submission {user.firstName} {user.lastName}!</h1>
      <StyledWrapper>
        {sampleData.map((field) => (
          <StyledRow key={field.id}>
            <StyledLabel>{field.label ?? field.placeholder}:</StyledLabel>
            <StyledSpan>{!isEmpty(user[field.id]) ? user[field.id] : 'N/A'}</StyledSpan>
          </StyledRow>
        ))}
        <Button onClick={handleBack}>Back</Button>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default UserSubmission;
