//hooks
import { useContext, useState, useEffect } from "react";

//contexts
import Contexts from "../../../../contexts/index";

//styled-components
import { Container } from "./Styles";

//components
import InputAndLabel from "../../../../components/Account/InputAndLabel/Index";
import Button from "../../../../components/Account/Button/Index";

//libs
import Swal from "sweetalert2";

//utills
import { getLoggedUser, login } from "../../../../utils/user";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useContext(Contexts);

  const session = async () => {
    const user = await getLoggedUser();

    if (user) {
      setAuth(true);
    }
  };

  useEffect(() => {
    session();
  }, []);

  const handleLogin = async () => {
    if (email === "" && password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Os campos estão vazios..!",
      });
    } else if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifique se todos os campos estao preenchidos..!",
      });
    } else if (email.includes("@") === false) {
      Swal.fire({
        icon: "error",
        text: "Por favor informe um email valido!",
      });
    } else if (email && password) {
      const response = await login(
        {
          user: email,
          password: password,
        },
        setAuth
      );
      console.log(response);

      if (response === false) {
        Swal.fire({
          icon: "error",
          text: "Senha incorreta!",
        });
      }
    }
  };
  return (
    <Container>
      <InputAndLabel
        id="email"
        label="Email"
        type="email"
        name="email"
        placeholder="Infome seu email"
        set={setEmail}
      />

      <InputAndLabel
        id="password"
        label="Senha"
        type="password"
        name="password"
        placeholder="Infome seu senha"
        set={setPassword}
      />

      <Button functionAction={handleLogin} value="Entrar" />
    </Container>
  );
};

export default Form;
