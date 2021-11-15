import * as React from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./add-article-style.css";
const RichTextField = () => {
    const [value, setValue] = useState("");

    return (
        <ReactQuill
            style={{
                width: "100%",
                height: "9rem",
                margin: "1rem auto",
            }}
            theme="snow"
            value={value}
            onChange={setValue}
        />
    );
};

const AddArticle = () => {
    return (
        <div className="container">
            <h1>Add a new Article</h1>
            <TextField id="filled-basic" label="Title" variant="filled" />
            <RichTextField />

            <LoadingButton
                style={{
                    marginTop: "5rem",
                    width: "100%",
                }}
                // onClick={handleClick}
                endIcon={<SendIcon />}
                // loading={loading}
                // loadingPosition="end"
                variant="contained">
                Post
            </LoadingButton>
        </div>
    );
};

export default AddArticle;
