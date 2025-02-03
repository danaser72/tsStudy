import { Box, Container, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      component={"footer"}
      maxWidth={false}
      sx={{ position: "fixed", bottom: 0 }}
      disableGutters>
      <Toolbar>
        <Typography variant="h6" noWrap={true}>
          Footer
        </Typography>
      </Toolbar>
    </Container>
  );
};

export default Footer;
