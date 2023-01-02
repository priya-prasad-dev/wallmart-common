import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, ListItem, Button } from "@mui/material";
// import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import InventoryIcon from '@mui/icons-material/Inventory';

const SupplierList = () => {
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
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            <InventoryIcon/>
              {/* <ManageAccountsOutlinedIcon/> */}
            </ListItemIcon>
            <ListItemText primary="Supplier" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <ul>
              <Link to="/res">
                <ListItem variant="outlined">SupplierCreate </ListItem>
              </Link>
              {/* <Link to="/sellapp">
                <ListItem variant="outlined">SellerApprove</ListItem>
              </Link> */}
              <Link to="/get">
                <ListItem variant="outlined">Display</ListItem>
              </Link>
              {/* <Link to="/fetchsp">
                <ListItem variant="outlined">FetchSupProduct</ListItem>
              </Link> */}
              <Link to="/bal">
                <ListItem variant="outlined">Balance</ListItem>
              </Link>
            </ul>
          </Collapse>
        </List>
      </Toolbar>
    </>
  );
};
export default SupplierList;
