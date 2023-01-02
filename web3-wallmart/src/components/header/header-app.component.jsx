import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { AppBar, Menu, Toolbar, Badge, Link } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import walmart from "../../assets/walmart.svg";
import { Box } from "@mui/system";
import Connect from "../login/connect-button.component";
const HeaderApp = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ background: "#e4f0e2" }}>
        {/* <AppBar position="static" sx={{ background: "#4a148c" }}> */}

        <Toolbar>
          <Box>
            <img src={walmart} alt="img" width="200" height="80" />
          </Box>
          {/* <Badge  sx={{ marginLeft: "80%" }} color="error">
            <NotificationsIcon />
          </Badge> */}
          <IconButton
            onClick={handleMenu}
            sx={{ marginLeft: "80%"}}
            color="inherit"
          >
            <AccountCircleRoundedIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            <MenuItem onClick={handleClose}><Connect/></MenuItem>
            {/* <Link ><MenuItem onClick={handleClose}>My account</MenuItem></Link> */}

          </Menu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default HeaderApp;
