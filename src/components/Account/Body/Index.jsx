import { Container, ContaineeContent } from "./Styles";

const Body = ({ children }) => {
  return (
    <Container>
      <ContaineeContent>{children}</ContaineeContent>
    </Container>
  );
};

export default Body;
