import { Title, Line } from "./Styles";

const Header = ({ title }) => {
  return (
    <header>
      <Title>{title}</Title>
      <Line />
    </header>
  );
};

export default Header;
