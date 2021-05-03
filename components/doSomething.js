const noflo = require('noflo');

exports.getComponent = () => {
  const c = new noflo.Component();
  // Define a meaningful icon for component from http://fontawesome.io/icons/
  c.icon = 'cog';
  // Provide a description on component usage
  c.description = 'do X';
  // Add input ports
  c.inPorts.add('in', {
    datatype: 'object',
  });
  c.inPorts.add('selector',{
      datatype:'string',
  });
  // Add output ports
  c.outPorts.add('element', {
    datatype: 'string',
  });
  c.outPorts.add('error',{
      datatype: 'object',
  })
  // What to do when port receives a packet
  c.process((input, output) => {
    // Check that input has received data packet
    if (!input.hasData('selector')) {
      return;
    }
    // Read the contents of the data packet
    const data = input.getData('selector');
    // Send the contents to output port
    output.send({
      element: data,
    });
    // Finish processing
    output.done();
  });
  return c;
};
