import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: #fb5607;
    padding: 30px;
    font-family: "Arial";
    `;

function StyledComponent() {
    return (
        <div>
            <Div>
                <h1>Hello Styled Component</h1>
            </Div>
        </div>
    )
}

export default StyledComponent;