import { Container, Text } from "@nextui-org/react";

const Header = () => {
  return (
    <Container xs css={{ paddingTop: 24, paddingBottom: 24 }}>
      <Text h1 size={20}>
        nextarter-nextui
      </Text>
    </Container>
  );
};

export default Header;
