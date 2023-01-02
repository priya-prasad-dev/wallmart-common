import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, ListItem, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ListItemIcon from "@mui/material/ListItemIcon";

const CustumerList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Toolbar>
        <List
          position="static"
          sx={{ width: "100%", maxWidth: 360 }}
          component="nav"
          //  aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <ul>
              <Link to="/cusr">
                <ListItem variant="outlined">CustomerRequest</ListItem>
              </Link>
              <Link to="/purc">
                <ListItem variant="outlined">CustomerPurchase</ListItem>
              </Link>
              <Link to="/fetchcp">
                <ListItem variant="outlined">FetchCusProduct</ListItem>
              </Link>
            </ul>
          </Collapse>
        </List>
      </Toolbar>
    </>
  );
};
export default CustumerList;
