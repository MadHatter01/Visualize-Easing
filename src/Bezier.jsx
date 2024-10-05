import React from "react";
import { useState, useEffect } from "react";

import { animated, useSpring } from "react-spring";
import BezierEasing from "bezier-easing";

const Bezier = () => {
    const [dragging, setDragging] = useState(null);
    const [controlPoints, setControlPoints] = useState({
        p1: { x: 0.25, y: 0.5 },
        p2: { x: 0.75, y: 0.5 },
    })

    const { p1, p2 } = controlPoints;


    const handleMouseMove = (e) => {
        if (!dragging) return;
        const rect = e.target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / 300;
        const y = (e.clientY - rect.top) / 300;

        setControlPoints((prev) => ({
            ...prev,
            [dragging]: { x: Math.max(0, Math.min(x, 1)), y: Math.max(0, Math.min(y, 1)) },
        }));
    };


    const handleMouseUp = () => setDragging(null);

    useEffect(()=>{
            const easingFcn = BezierEasing(p1.x, p1.y, p2.x, p2.y);
            
    })

    return (
        <>
            <svg width="300" height="300" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                <path
                    d={`M 0 300 C ${p1.x * 300} ${300 - p1.y * 300}, ${p2.x * 300} ${300 - p2.y * 300}, 300 0`}
                    stroke="red"
                    fill="transparent"
                />

                <circle cx={p1.x * 300} cy={300 - p1.y * 300} r={8} fill="cyan" onMouseDown={()=>setDragging('p1')} />
                <circle cx={p2.x * 300} cy={300 - p2.y * 300} r={8} fill="cyan" onMouseDown={()=>setDragging('p2')} />
            </svg>

        </>
    )
}


export default Bezier;