//components
import Header from "../../components/Account/Header/Index";
import Body from "../../components/Account/Body/Index";
import Form from "./components/Form/Index";
import Footer from "../../components/Account/Footer/Index";

//page utils
import { register } from "../../utils/user";

const Register = () => {
  return (
    <>
      <Body>
        <Header title="Cadastre-se" />

        <section>
          <Form />
        </section>

        <Footer text="Já tem uma conta" link="/" valueForLink="Login" />
      </Body>
    </>
  );
};

export default Register;
