import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function MyComponent() {
    const [value, setValue] = useState("");

    return (
        <ReactQuill
            style={{
                height: "300px",
            }}
            theme="snow"
            value={value}
            onChange={setValue}
        />
    );
}
const Test = () => {
    return (
        <div>
            <h1>Test Page</h1>
            <MyComponent />
        </div>
    );
};

export default Test;
