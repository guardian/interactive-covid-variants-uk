import * as d3B from 'd3'
//import * as streamgraph from './streamgraph.js'

import { Streamgraph } from './stremgraph.js'



const d3 = Object.assign({}, d3B);

//d3.csv('<%= path %>/unemployment.csv')
d3.csv('<%= path %>/Estimated_Cases_in_England.csv')
.then(raw => {

	

	let chart = Streamgraph(raw, {
	  x: d => d.date,
	  y: d => d.value,
	  z: d => d.lineage,
	  yLabel: "→ Variants",
	  width:  window.innerWidth,
	  height:2600
	})

	let div = d3.select('.interactive-line')
	.append('div')
	.style('width', window.innerWidth + 'px')
	.style('position','absolute')

	div.append('div')
	.style('width', window.innerWidth + 'px')
	.style('position','sticky')
	.style('top', '0')
	.style('border', '1px solid red')

	
	


})


