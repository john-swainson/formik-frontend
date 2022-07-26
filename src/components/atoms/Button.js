import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
`;

const Button = ({ children, ...props }) => {

  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
};

export default Button;
