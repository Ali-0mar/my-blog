import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import logo from "../homepage/img.jpg";

import "./homepage-style.css";

const HomePage = () => {
    return (
        <Card
            sx={{ maxWidth: 365 }}
            style={{
                display: "flex",
                flexDirection: "column",
                margin: "100px auto",
                borderRadius: "50px",
            }}>
            <CardMedia
                component="img"
                image={logo}
                alt="green iguana"
                style={{
                    borderRadius: "50%",
                    width: "fit-content",
                    margin: "auto",
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Portfoloio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This site is Blog like webSite and more like a portfoloio
                    for my Work the sit
                </Typography>
            </CardContent>
        </Card>
    );
};

export default HomePage;
