d3.select('h1').style('color', 'red')
.text('Updated tag')

d3.select('body').append('p').text('First graph')
d3.select('body').append('p').text('Second graph')
d3.select('body').append('p').text('Third graph')

d3.selectAll('p').style('color', 'blue')