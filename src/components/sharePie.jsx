import * as d3 from 'd3';

function draw(node, data) {
  const selectedNode = d3.select(node);
  selectedNode.selectAll('svg > *').remove();

  const pie = d3.pie().value(d => d.value);
  const sections = pie(data);

  const width = 550;
  const height = 400;
  selectedNode
    .attr('width', width)
    .attr('height', height);

  const block = selectedNode.selectAll('g')
    .append('g');

  const arc = d3.arc()
    .innerRadius(50)
    .outerRadius(100);

  const outerArc = d3.arc()
    .innerRadius(100)
    .outerRadius(200);

  const accent = d3.scaleOrdinal(d3.schemeSet1).domain(data.map(d => d.name));

  block
    .data(sections)
    .enter()
    .append('path')
      .attr('d', arc)
      .attr('fill', d => accent(d.data.name))
      .attr('stroke', 'white')
      .attr('stroke-width', '2px')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  block
    .data(sections)
    .enter()
    .append('text')
    .attr('dy', '0.5em')
    .attr('text-anchor', 'end')
    .attr('transform', d => {
      const offset = outerArc.centroid(d);
      const pos = [offset[0] + (width / 2), offset[1] + (height / 2)];
      return `translate(${pos})`
    })
    .text(d => d.data.name);

  block
    .data(sections)
    .enter()
    .append('polyline')
    .attr('points', d => {
      const pos = outerArc.centroid(d)
      return [pos, arc.centroid(d)]
    })
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .attr('stroke', 'black')
}

export default draw;
