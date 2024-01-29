import React from 'react';

const SlotMachineComponent = () => {
    return (
        <div>
            <head>
                <link rel="stylesheet" href="slotMachine.sass" />
                <script src="./SlotMachine.js"/>
            </head>
            <canvas id="screen"></canvas>
        </div>
    );
};

export default SlotMachineComponent;
