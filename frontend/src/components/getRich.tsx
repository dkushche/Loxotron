import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: yellow;
    `

function clickMe(){
    alert('You ckicked me!');
} 

export default function getRich() {
    return (
        <div>
            <Button onClick={clickMe}>
                Button
            </Button>
        </div>
    );
}