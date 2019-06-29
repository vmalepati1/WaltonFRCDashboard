let buttonConnect = document.getElementById('button-connect');
let rioAddress = 'roborio-2974-frc.local';

// Set function to be called on NetworkTables connect. Not implemented.
//NetworkTables.addWsConnectionListener(onNetworkTablesConnection, true);

// Set function to be called when robot dis/connects
NetworkTables.addRobotConnectionListener(onRobotConnection, false);

// Sets function to be called when any NetworkTables key/value changes
//NetworkTables.addGlobalListener(onValueChanged, true);

/**
 * Function to be called when robot connects
 * @param {boolean} connected
 */
function onRobotConnection(connected) {
	var state = connected ? 'connected' : 'disconnected';
	console.log(state);
	ui.robotState.textContent = state;

	buttonConnect.onclick = () => {
		ipc.send('connect', rioAddress);
		buttonConnect.value = 'Connecting...';
		buttonConnect.disabled = true;
	};
	
	if (!connected) {
		buttonConnect.value = 'Connect';
		buttonConnect.disabled = false;
	} else {
		buttonConnect.disabled = true;
	}
}