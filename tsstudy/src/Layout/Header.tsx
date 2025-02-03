import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Header = (prop: { fnOpen: () => void }) => {
  const { fnOpen } = prop;
  return (
    <AppBar enableColorOnDark={true} position="fixed">
      <Toolbar>
        <IconButton color="inherit" onClick={fnOpen} edge="start">
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap={true}>
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
