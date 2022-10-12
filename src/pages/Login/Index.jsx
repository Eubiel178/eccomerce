import Body from "../../components/Account/Body/Index";
import Header from "../../components/Account/Header/Index";
import Form from "./components/Form/Index";
import Footer from "../../components/Account/Footer/Index";

const Login = () => {
  return (
    <Body>
      <Header title="Login" />

      <section>
        <Form />
      </section>

      <Footer
        text="Ainda não tem conta?"
        link="/register"
        valueForLink="   Cadastre-se"
      />
    </Body>
  );
};

export default Login;
