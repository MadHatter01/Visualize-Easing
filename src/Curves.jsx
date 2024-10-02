import React from 'react';
import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Curves = ()=>{
    const svgRef = useRef();
    useEffect(()=>{
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();
        
        const xScale = d3.scaleLinear().domain([0,1,2]).range([40, 370]);
        const yScale = d3.scaleLinear().domain([0,1,2]).range([170, 20]);

        svg.append('g')
        .attr('transform', 'translate(0, 170)')
        .call(d3.axisBottom(xScale));
        svg.append('g')
        .attr('transform', 'translate(40, 0)')
        .call(d3.axisLeft(yScale));
    }, []);


return(<>
<svg ref={svgRef} width={400} height={200}/>

</>)

}

export default Curves;