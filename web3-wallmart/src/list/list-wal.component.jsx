import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, ListItem, Button } from "@mui/material";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from '@mui/icons-material/Home';

const WallmartList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Toolbar>
        <List
          position="static"
          sx={{ width: "100%", maxWidth: 360}}
          component="nav"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            <HomeIcon/>
              {/* <InboxIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Wallmart" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <ul>
              {/* <Link to="/walreq">
                <ListItem variant="outlined">WallmartRequest </ListItem>
              </Link> */}
              {/* <Link to="/purwal">
                <ListItem variant="outlined">WallmartPurchase</ListItem>
              </Link> */}
              <Link to="/fetchwp">
                <ListItem variant="outlined">FetchWalProduct</ListItem>
              </Link>
              <Link to="/wala">
                <ListItem variant="outlined">WallmartApprove</ListItem>
              </Link>
              <Link to="/path">
                <ListItem variant="outlined">WallmartDisplay</ListItem>
              </Link>
            </ul>
          </Collapse>
        </List>
      </Toolbar>
    </>
  );
};
export default WallmartList;
