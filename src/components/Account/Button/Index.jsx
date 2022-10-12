import { ButtonContainer } from "./Styles";

const Button = ({ value, functionAction }) => {
  const preventDefault = (event) => {
    event.preventDefault();

    functionAction();
  };
  return (
    <ButtonContainer>
      <button onClick={preventDefault}>{value}</button>
    </ButtonContainer>
  );
};

export default Button;
