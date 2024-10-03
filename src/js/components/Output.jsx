import React, { useState } from "react";

export default function Output(props) {
    return (
            <div>
                <h2>Monthly Payment:</h2>
                <h2 id="output" name="output">${props.output}</h2>
            </div>
    );
}