import styled from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  min-width: 300px;
  padding: 8px 8px;
`;

const StyledTextArea = styled.textarea`
  min-width: 300px;
  min-height: 80px;
  padding: 8px 8px;
`;

const StyledSelect = styled.select`
  min-width: 300px;
  padding: 8px 8px;
`;

const StyledError = styled.div`
  color: #ff0000;
  font-size: 12px;
`;

const CustomInput = ({
  field,
  form: { touched, errors },
  type,
  children,
  ...props
}) => {
  return (
    <StyledInputContainer>
      { type === 'input' ? (
        <StyledInput {...field} {...props} />
      ) : (
        type === 'textarea' ? (
          <StyledTextArea {...field} {...props} />
        ) : (
          type === 'select' ? (
            <StyledSelect {...field} {...props}>
              {children}
            </StyledSelect>
          ) : null
        )
      )}
      {touched[field.name] &&
        errors[field.name] && <StyledError>{errors[field.name]}</StyledError>}
    </StyledInputContainer>
  );
};

export default CustomInput;
