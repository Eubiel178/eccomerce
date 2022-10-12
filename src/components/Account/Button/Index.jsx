import { ButtonContainer } from "./Styles";

const Button = ({ value, functionAction }) => {
  return (
    <ButtonContainer>
      <button onClick={functionAction}>{value}</button>
    </ButtonContainer>
  );
};

export default Button;
