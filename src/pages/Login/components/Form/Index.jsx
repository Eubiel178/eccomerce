//styled-components
import { Container } from "./Styles";

//components
import InputAndLabel from "../../../../components/Account/InputAndLabel/Index";
import Button from "../../../../components/Account/Button/Index";

const Form = () => {
  return (
    <Container>
      <InputAndLabel
        id="email"
        label="Email"
        type="email"
        name="email"
        placeholder="Infome seu email"
      />

      <InputAndLabel
        id="password"
        label="Senha"
        type="password"
        name="password"
        placeholder="Infome seu senha"
      />

      <Button value="Entrar" />
    </Container>
  );
};

export default Form;
