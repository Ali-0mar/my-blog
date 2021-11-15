import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Link from "@mui/material/Link";

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: "auto", bottom: 0 }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}>
                        <Copyright sitename={"Ali's Blog"} />
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="inherit"
            align="center"
            justifyContent="center"
            {...props}>
            {"Copyright © "}
            <Link color="inherit" href="/">
                {props.sitename}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
