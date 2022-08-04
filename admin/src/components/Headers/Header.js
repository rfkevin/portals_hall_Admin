import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { portalsHall } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { toggledarkMode } from "../../theme/slice";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Link to="/" sx={{ flexGrow: 1 }}>
            <img src="/assets/headerlogo.png" alt="logo header" height="50" />
          </Link>
          <Toolbar sx={{ flexGrow: 1 }}/>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              dispatch(toggledarkMode());
            }}
            color="inherit"
          >
            {darkMode === true ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {Object.entries(portalsHall).map(([index, data]) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText>
                    <Typography
                      component={Link}
                      style={{textDecoration: 'none'}}
                      to={data.page}
                      color="text.secondary"
                    >
                      {data.name}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
}
