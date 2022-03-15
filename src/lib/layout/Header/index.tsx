import { Container, Row, Text } from "@nextui-org/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Container xs css={{ paddingTop: 24, paddingBottom: 24 }}>
      <Row justify="space-between">
        <Text h1 size={20}>
          nextarter-nextui
        </Text>
        <ThemeToggle />
      </Row>
    </Container>
  );
};

export default Header;
