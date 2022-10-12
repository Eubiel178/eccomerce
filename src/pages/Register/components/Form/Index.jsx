import { useState } from "react";

//styled-components
import { Container } from "./Styles";

//components
import InputAndLabel from "../../../../components/Account/InputAndLabel/Index";
import Button from "../../../../components/Account/Button/Index";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = async () => {
    if (email === "" && password === "" && name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Os campos estão  vazios!",
      });
    }
    if (password === "" || email === "" || password2 === "" || name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifique se todos os campos estao preenchidos..!",
      });
    } else if (name && email && password && password === password2) {
      const response = await register({
        user: {
          name: name,
          user: email,
          email: email,
          password: password,
          password_confirmation: password2,
        },
      });

      if (response.code === "ERR_BAD_REQUEST") {
        await Swal.fire("Oops", "Ja existe uma conta com esse email!", "error");

        setName("");
        setEmail("");
        setPassword("");
        setPassword2("");
      } else {
        const router = History();

        Swal.fire(
          "Sua conta foi criada com sucesso!",
          "Bom Trabalho",
          "success"
        );
      }
    }
  };

  return (
    <Container>
      <InputAndLabel
        id="name"
        label="Nome"
        type="text"
        name="name"
        placeholder="Infome seu nome e sobrenome"
        set={setName}
        value={name}
      />

      <InputAndLabel
        id="email"
        label="Email"
        type="email"
        name="email"
        placeholder="Infome seu email"
        set={setEmail}
        value={email}
      />

      <InputAndLabel
        id="password"
        label="Senha"
        type="password"
        name="password"
        placeholder="Infome seu senha"
        set={setPassword}
        value={password}
      />

      <InputAndLabel
        id="password2"
        label="Repita sua senha"
        type="password"
        name="password2"
        placeholder="Repita sua senha"
        set={setPassword2}
        value={password2}
      />

      <Button
        value="Criar Conta"
        functionAction={() => {
          handleRegister();
        }}
      />
    </Container>
  );
};

export default Form;
