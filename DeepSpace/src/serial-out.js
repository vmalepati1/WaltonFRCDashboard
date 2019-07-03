const path = 'COM6';
const baudRate = 9600;
const outputInterval = 1000;
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort(path, { baudRate: baudRate });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
const exists = portName => SerialPort.list().then(ports => ports.some(port => port.comName === portName ));

var portOutputIntervalHandle = null;

// Set function to be called when robot dis/connects
NetworkTables.addRobotConnectionListener(onRobotConnection, false);

// Successful bus connection
port.on("open", () => {
	ipc.send('serialConnect', path, baudRate);
});

port.on("close", () => {
	// When serial port closes clear port output callback
	if (portOutputIntervalHandle) {
		clearInterval(portOutputIntervalHandle);
	}
});

// Open errors will be emitted as an error event
port.on('error', function(err) {
  ipc.send('serialError', err.message);
});

// Enable if you want to see the messages sent from the dashboard to the Arduino in the console
/*
parser.on('data', data =>{
  ipc.send('serialDebugReadback', data);
});
*/

function onRobotConnection(connected) {
	if (connected) {
		// Enable interval port output function if connection was successful
		if (exists(path)) {
			portOutputIntervalHandle = setInterval(portOutput, outputInterval);
		}
	} else {
		if (portOutputIntervalHandle) {
			// Clear port output callback
			clearInterval(portOutputIntervalHandle);
		}
	}
}

function portOutput() {
	port.write('Hello World\n', (err) => {
		if (err) {
		  return ipc.send('serialWriteError', err.message);
		}
	});
}