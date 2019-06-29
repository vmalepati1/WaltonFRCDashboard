const path = 'COM3';
const baudRate = 9600;
const outputInterval = 1000;
const SerialPort = require('serialport');
const port = new SerialPort(path, { baudRate: baudRate });

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

function onRobotConnection(connected) {
	if (connected) {
		// Enable interval port output function if connection was successful
		if (port.isOpen()) {
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