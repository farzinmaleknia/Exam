import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header: React.FC = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1, fontSize: "32px" }}>
            Exam Hall
          </Typography>
          <Button color="inherit" sx={{ fontSize: 20 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
