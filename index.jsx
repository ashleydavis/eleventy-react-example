export const data = {
    title: "An example React page rendered through Eleventy",
    layout: "main",
};

import React from "react";
import AComponent from "./components/a-component";

export default (data) => {
    return (
        <div>
            <div>Hello {data.title}</div>
            <AComponent msg={"Hello computer!"}></AComponent>
        </div>
    );
};