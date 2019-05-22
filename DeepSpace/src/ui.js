let ui = {
    timer: document.getElementById('w-node-14012e7d8a0d-6cf0ea0e'),
    robotState: document.getElementById('w-node-6ca20209b32e-6cf0ea0e'),
	configurationBox: [
		[document.getElementById('Constants-KV'), 'Constants/KV'],
		[document.getElementById('Constants-KAcc'), 'Constants/KAcc'],
		[document.getElementById('Constants-KK'), 'Constants/KK'],
		[document.getElementById('Constants-KS'), 'Constants/KS'],
		[document.getElementById('Constants-KAngle'), 'Constants/KAngle'],
		[document.getElementById('Constants-Max-Velocity'), 'Constants/Max Velocity'],
		[document.getElementById('Constants-Max-Acceleration'), 'Constants/Max Acceleration'],
		[document.getElementById('Constants-KL'), 'Constants/KL'],
		[document.getElementById('Motion-Front-Rocket-X'), 'Motion/Front Rocket X'],
		[document.getElementById('Transform-Select'), 'Driveteam/Transform Select'],
		[document.getElementById('Motion-Front-Rocket-Y'), 'Motion/Front Rocket Y'],
		[document.getElementById('Motion-Front-Rocket-Angle'), 'Motion/Front Rocket Angle'],
		[document.getElementById('Motion-BackUp-X'), 'Motion/BackUp X'],
		[document.getElementById('Motion-BackUp-Y'), 'Motion/BackUp Y'],
		[document.getElementById('Motion-BackUp-Angle'), 'Motion/BackUp Angle'],
		[document.getElementById('Motion-Hatch-PickUp-X'), 'Motion/Hatch PickUp X'],
		[document.getElementById('Motion-Hatch-PickUp-Y'), 'Motion/Hatch PickUp Y'],
		[document.getElementById('Motion-Hatch-PickUp-Angle'), 'Motion/Hatch PickUp Angle'],
		[document.getElementById('Autonomous-Select'), 'Auton']
	]
};

// Set function to be called when robot dis/connects
NetworkTables.addRobotConnectionListener(onRobotConnection, false);

function onRobotConnection(connected) {
	if (connected) {
		populateDefaultConfigurations();
		setConfigurationCallbacks();
	} else {
		clearConfigurationCallbacks();
		
		// Temporary
		populateDefaultConfigurations();
		setConfigurationCallbacks();
	}
}

function populateDefaultConfigurations() {
	for (var kvp in ui.configurationBox) {
		var configurationElement = ui.configurationBox[kvp][0];
		var networkTablesKey = ui.configurationBox[kvp][1];
		
		if (networkTablesKey == 'Auton') {
			var usingAuton = NetworkTables.getValue('Use Auton', false);
			var isRight = NetworkTables.getValue('Is Right Auton?', false);
			
			if (!usingAuton) {
				configurationElement.value = 'Disabled';
			} else {
				if (isRight) configurationElement.value = 'Right';
				else configurationElement.value = 'Left';
			}
		} else if (networkTablesKey == 'Driveteam/Transform Select') {
			configurationElement.value = NetworkTables.getValue(networkTablesKey, 'Normal');
		} else {
			configurationElement.value = NetworkTables.getValue(networkTablesKey, 0.0);
		}
	}
}

function setConfigurationCallbacks() {
	for (var kvp in ui.configurationBox) {
		ui.configurationBox[kvp][0].onchange = onConfigurationChange;
	}
}

function clearConfigurationCallbacks() {
	for (var kvp in ui.configurationBox) {
		ui.configurationBox[kvp][0].onchange = null;
	}
}

// User changed value in configuration box
function onConfigurationChange(event) {
	// Find document element and its network table key pair within configuration box array
	var keyValuePair = ui.configurationBox.find(kvp => kvp[0] === event.target);
	var networkTablesKey = keyValuePair[1];
	
	// Handle special cases (ex. auton selection is sent by a combination of booleans instead of by a string)
	if (networkTablesKey == 'Auton') {
		if (event.target.value == 'Disabled') {
			// Selected no auton
			NetworkTables.putValue('Use Auton', false);
		} else if (event.target.value == 'Left') {
			// Selected left auton
			NetworkTables.putValue('Use Auton', true);
			NetworkTables.putValue('Is Right Auton?', false);
		} else {
			// Selected right auton
			NetworkTables.putValue('Use Auton', true);
			NetworkTables.putValue('Is Right Auton?', true);
		}
	} else if (networkTablesKey == 'Driveteam/Transform Select') {
		NetworkTables.putValue(networkTablesKey, event.target.value);
	} else {
		NetworkTables.putValue(networkTablesKey, parseFloat(event.target.value));
	}
}