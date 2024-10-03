import React from "react";
import { useState, useEffect } from "react";

import { animated, useSpring } from "react-spring";


const Bezier = () => {
    const [controlPoints, setControlPoints] = useState({
        p1: { x: 0.25, y: 0.5 },
        p2: { x: 0.75, y: 0.5 },
    })

    const {p1,p2} = controlPoints;

    return (
        <>
            <svg width="300" height="300">
                <path
                    d={`M 0 300 C ${p1.x * 300} ${300 - p1.y * 300}, ${p2.x * 300} ${300 - p2.y * 300}, 300 0`}
                    stroke="red"
                    fill="transparent"
                />

                <circle  cx={p1.x*300} cy={300-p1.y*300} r={8} fill="cyan"/>
                <circle  cx={p2.x*300} cy={300-p2.y*300} r={8} fill="cyan"/>
            </svg>

        </>
    )
}


export default Bezier;