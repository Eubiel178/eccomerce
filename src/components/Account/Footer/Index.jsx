import { FooterContainer } from "./Styles";

import { Link } from "react-router-dom";

const Footer = ({ link, text, valueForLink }) => {
  return (
    <FooterContainer>
      <p>{text}</p>
      <Link to={link}>{valueForLink}</Link>
    </FooterContainer>
  );
};

export default Footer;
