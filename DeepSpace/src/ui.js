let ui = {
    timer: document.getElementById('w-node-14012e7d8a0d-6cf0ea0e'),
    robotState: document.getElementById('w-node-6ca20209b32e-6cf0ea0e'),
	configurationBox: [
		document.getElementById('Constants-KV'),
		document.getElementById('Constants-KAcc'),
		document.getElementById('Constants-KK'),
		document.getElementById('Constants-KS'),
		document.getElementById('Constants-KAngle'),
		document.getElementById('Constants-Max-Velocity'),
		document.getElementById('Constants-Max-Acceleration'),
		document.getElementById('Constants-KL'),
		document.getElementById('Motion-Front-Rocket-X'),
		document.getElementById('Motion-Front-Rocket-Y'),
		document.getElementById('Motion-Front-Rocket-Angle'),
		document.getElementById('Motion-BackUp-X'),
		document.getElementById('Motion-BackUp-Y'),
		document.getElementById('Motion-BackUp-Angle'),
		document.getElementById('Motion-Hatch-PickUp-X'),
		document.getElementById('Motion-Hatch-PickUp-Y'),
		document.getElementById('Motion-Hatch-PickUp-Angle')
	]
};

for (var constantElement in ui.configurationBox) {
	ui.configurationBox[constantElement].oninput = onConfigurationChange;
}

// User changed value in configuration box
function onConfigurationChange(event) {
	// HTML ids are seperated by dashes so replace them with '/'
	var networkTablesKey = event.target.id.replace(/-/g, '/');
	
	NetworkTables.putValue(networkTablesKey, parseFloat(event.target.value));
}