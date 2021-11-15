import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 2 }}>
            <AppBar position="static">
                <Toolbar
                    style={{
                        justifyContent: "space-between",
                    }}>
                    <Link
                        href="/"
                        variant="h6"
                        color="inherit"
                        style={{
                            textDecoration: "none",
                        }}>
                        Ali's Blog
                    </Link>
                    <Link
                        href="/signup"
                        variant="h6"
                        color="inherit"
                        style={{
                            textDecoration: "none",
                        }}>
                        Join Us
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
