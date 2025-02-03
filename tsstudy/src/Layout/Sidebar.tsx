import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItem,
} from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Sidebar = (prop: { open: boolean; fnOpen: () => void }) => {
  const { open, fnOpen } = prop;
  return (
    <Drawer open={open} onClose={fnOpen}>
      <Box sx={{ width: 250 }} onClick={fnOpen}>
        <List>
          <ListItem key={"Home"} disablePadding component={Link} to="/">
            <ListItemButton>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem key={"App"} disablePadding component={Link} to="/App">
            <ListItemButton>
              <ListItemText primary={"App"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Todo"} disablePadding component={Link} to="/Todo">
            <ListItemButton>
              <ListItemText primary={"Todo"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"TicTakToe"}
            disablePadding
            component={Link}
            to="/TicTakToe">
            <ListItemButton>
              <ListItemText primary={"TicTakToe"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"Calendar"}
            disablePadding
            component={Link}
            to="/Calendar">
            <ListItemButton>
              <ListItemText primary={"Calendar"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
