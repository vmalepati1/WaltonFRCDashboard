let address = document.getElementById('connect-address'),
	connect = document.getElementById('w-node-a92d9f5444d2-6cf0ea0e'),
	buttonConnect = document.getElementById('w-node-8c7b447ac25b-6cf0ea0e'),
	loginDiv = document.getElementById('w-node-664498c60291-6cf0ea0e');

let loginShown = true;

// Set function to be called on NetworkTables connect. Not implemented.
//NetworkTables.addWsConnectionListener(onNetworkTablesConnection, true);

// Set function to be called when robot dis/connects
NetworkTables.addRobotConnectionListener(onRobotConnection, false);

// Sets function to be called when any NetworkTables key/value changes
//NetworkTables.addGlobalListener(onValueChanged, true);

// Function for hiding the connect box
onkeydown = key => {
	if (key.key === 'Escape') {
		loginDiv.style.display = 'none';
		loginShown = false;
	}
};

/**
 * Function to be called when robot connects
 * @param {boolean} connected
 */
function onRobotConnection(connected) {
	var state = connected ? 'connected' : 'disconnected';
	console.log(state);
	ui.robotState.textContent = state;

	buttonConnect.onclick = () => {
		loginDiv.style.display = 'block';
		loginShown = true;
	};
	if (connected) {
		// On connect hide the connect popup
		loginDiv.style.display = 'none';
		loginShown = false;
	}
	else if (loginShown) {
		setLogin();
	}
}

function setLogin() {
	// Add Enter key handler
	// Enable the input and the button
	address.disabled = connect.disabled = false;
	connect.value = 'Connect';
	// Add the default address and select xxxx
	address.placeholder = 'roborio-xxxx-frc.local';
	address.focus();
	address.setSelectionRange(8, 12);
}
// On click try to connect and disable the input and the button
connect.onclick = () => {
	ipc.send('connect', address.value);
	address.disabled = connect.disabled = true;
	connect.value = 'Connecting...';
};
address.onkeydown = ev => {
	if (ev.key === 'Enter') {
		connect.click();
		ev.preventDefault();
		ev.stopPropagation();
	}
};

// Show login when starting
loginDiv.style.display = 'block';
setLogin();