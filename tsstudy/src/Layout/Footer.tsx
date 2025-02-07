import { Box, Container, Toolbar, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const defaultTheme = useTheme();
  return (
    <Container
      component={"footer"}
      maxWidth={false}
      sx={{
        backgroundColor: defaultTheme.palette.primary.main,
        color: defaultTheme.palette.primary.contrastText,
      }}
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
