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
	],
	diagnosticsTiles: [
		[document.getElementById('w-node-ece068a8fbe3-6cf0ea0e'), 'Motors/Elevator Height'],
		[document.getElementById('w-node-6456cc18dbb4-6cf0ea0e'), 'Motors/Hatch Angle'],
		[document.getElementById('w-node-795b9b2337a4-6cf0ea0e'), 'Motors/Intake Open'],
		[document.getElementById('w-node-8e498667928f-6cf0ea0e'), 'Drivetrain/rightMotor'],
		[document.getElementById('w-node-d58ddcae3769-6cf0ea0e'), 'Motors/Cargo Angle'],
		[document.getElementById('w-node-33d94c8c1081-6cf0ea0e'), 'Motors/Lower Limit'],
		[document.getElementById('w-node-d4c27eac3f93-6cf0ea0e'), 'Motors/Elevator Forwards Soft Limit'],
		[document.getElementById('w-node-45d40d43c455-6cf0ea0e'), 'Motors/Elevator Reverse Soft Limit'],
		[document.getElementById('w-node-633d385417e5-6cf0ea0e'), 'Motors/Claw Forwards Soft Limit'],
		[document.getElementById('w-node-2b4d1c09f1c8-6cf0ea0e'), 'Motors/Claw Reverse Soft Limit'],
		[document.getElementById('w-node-15b66f493392-6cf0ea0e'), 'Motors/Hatch Forwards Soft Limit'],
		[document.getElementById('w-node-65026c0c8959-6cf0ea0e'), 'Motors/Hatch Reverse Soft Limit'],
		[document.getElementById('w-node-0874236dabf0-6cf0ea0e'), 'Motors/State'],
		[document.getElementById('w-node-230f5958393e-6cf0ea0e'), 'Motors/Elevator Mode'],
		[document.getElementById('w-node-0827ba0ef127-6cf0ea0e'), 'Motors/Cargo Mode'],
		[document.getElementById('w-node-fc40adc9d11f-6cf0ea0e'), 'Motors/Hatch Mode'],
		[document.getElementById('w-node-3dae72b756e1-6cf0ea0e'), 'Motors/Elevator Power'],
		[document.getElementById('w-node-6ab5de7d522d-6cf0ea0e'), 'Motors/Elevator Target'],
		[document.getElementById('w-node-5c897ecfedd4-6cf0ea0e'), 'Motors/Hatch Power'],
		[document.getElementById('w-node-2dd40fb21b0e-6cf0ea0e'), 'Motors/Hatch Target'],
		[document.getElementById('w-node-2d309eb47a59-6cf0ea0e'), 'Motors/Cargo Power'],
		[document.getElementById('w-node-4e1151804e61-6cf0ea0e'), 'Motors/Cargo Target'],
		[document.getElementById('w-node-1a75b8348af0-6cf0ea0e'), 'Motors/Climber Power'],
		[document.getElementById('w-node-e58751785c7a-6cf0ea0e'), 'Motors/Climber Mode'],
		[document.getElementById('w-node-828d4271a53a-6cf0ea0e'), 'Drivetrain/Position'],
		[document.getElementById('w-node-9971a8c5e074-6cf0ea0e'), 'Drivetrain/Encoder Right'],
		[document.getElementById('w-node-04c10c4157ee-6cf0ea0e'), 'Drivetrain/Encoder Left'],
		[document.getElementById('w-node-39646deb58ba-6cf0ea0e'), 'Drivetrain/leftSpeed'],
		[document.getElementById('w-node-6a6121c16e8e-6cf0ea0e'), 'Drivetrain/rightSpeed'],
		[document.getElementById('w-node-75d3c40bd623-6cf0ea0e'), 'Drivetrain/leftMotor']
	],
	generalStatistics: [
		[document.querySelector('.progress-ring-bv'), 'Diagnostics/Battery Voltage', 0.0, 12.0, 'v'],
		[document.querySelector('.progress-ring-cpu'), 'Diagnostics/RIO CPU Use', 0.0, 100.0, '%'],
		[document.querySelector('.progress-ring-pd'), 'Diagnostics/Power Draw', 0.0, 40.0, 'A'],
		[document.querySelector('.progress-ring-ram'), 'Diagnostics/RIO RAM Use', 0.0, 100.0, '%']
	],
	powerUsageBox: [
		[document.getElementById('fl-motor-pu'), 'Diagnostics/Front Left Motor Power Usage', 0.0, 25.0],
		[document.getElementById('fr-motor-pu'), 'Diagnostics/Front Right Motor Power Usage', 0.0, 25.0],
		[document.getElementById('bl-motor-pu'), 'Diagnostics/Back Left Motor Power Usage', 0.0, 25.0],
		[document.getElementById('br-motor-pu'), 'Diagnostics/Back Right Motor Power Usage', 0.0, 25.0],
		[document.getElementById('climber-motor-pu'), 'Diagnostics/Climber Motor Power Usage', 0.0, 25.0],
		[document.getElementById('roborio-pu'), 'Diagnostics/RIO Power Usage', 0.0, 25.0]
	],
	motorPowersBox: [
		[document.getElementById('fl-wheel-power'), 'Drivetrain/leftMotor', -1.0, 1.0],
		[document.getElementById('fr-wheel-power'), 'Drivetrain/rightMotor', -1.0, 1.0],
		[document.getElementById('bl-wheel-power'), 'Drivetrain/leftMotor', -1.0, 1.0],
		[document.getElementById('br-wheel-power'), 'Drivetrain/rightMotor', -1.0, 1.0],
		[document.getElementById('climber-motor-power'), 'Motors/Climber Power', -1.0, 1.0]
	],
	gyroscope: [
		[document.getElementById('gyro'), 'Diagnostics/Gyro Orientation', 0.0]
	]
};

// Set function to be called when robot dis/connects
NetworkTables.addRobotConnectionListener(onRobotConnection, false);
// Add function to be called when value changes in network tables
NetworkTables.addGlobalListener(onNetworkTablesChange, false);

function onRobotConnection(connected) {
	if (connected) {
		populateDefaultConfigurations();
		setConfigurationCallbacks();
	} else {
		clearConfigurationCallbacks();
	}
}

function onNetworkTablesChange(key, value, isNew) {
	var keyValuePair = ui.diagnosticsTiles.find(kvp => kvp[1] === key);
	
	if (keyValuePair) {
		var tileElement = keyValuePair[0];
		
		var previousTileText = tileElement.innerHTML;
		var newTileText = previousTileText.split(':')[0] + ': ' + value.toString();
		
		tileElement.innerHTML = newTileText;
	}
	
	keyValuePair = ui.generalStatistics.find(kvp => kvp[1] === key);
	
	if (keyValuePair) {
		var statisticCircle = keyValuePair[0].children[1].children[1];
		var statisticText = keyValuePair[0].children[1].children[2];
		
		var rangeMin = keyValuePair[2];
		var rangeMax = keyValuePair[3];
		var unit = keyValuePair[4];
		var percent = value > rangeMin ? (value / rangeMax) : rangeMin;
		
		const radius = statisticCircle.r.baseVal.value;
		const circumference = radius * 2 * Math.PI;
		const offset = circumference - percent * circumference;

		statisticCircle.style.strokeDasharray = `${circumference} ${circumference}`;
		statisticCircle.style.strokeDashoffset = offset;
		
		statisticText.textContent = value + unit;
	}
	
	keyValuePair = ui.powerUsageBox.find(kvp => kvp[1] === key);
	
	if (keyValuePair) {
		var backgroundRect = keyValuePair[0].children[1].children[0];
		var barChart = keyValuePair[0].children[1].children[1];
		var ampsText = keyValuePair[0].children[1].children[2];
		
		var rangeMin = keyValuePair[2];
		var rangeMax = keyValuePair[3];
		
		var percent = value > rangeMin ? (value / rangeMax) : rangeMin;
		
		barChart.setAttribute('width', percent * backgroundRect.getAttribute('width'));
		
		ampsText.textContent = value + 'A';
	}
	
	// Left motor value or right motor value is shared among two bar charts for the back and front wheels
	// Thus there can be multiple matches of UI elements that use the same network tables key
	var keyValuePairs = ui.motorPowersBox.filter(kvp => kvp[1] === key);
	
	for (var kvp in keyValuePairs) {
		keyValuePair = keyValuePairs[kvp];
		
		var backgroundRect = keyValuePair[0].children[1].children[0];
		var barChart = keyValuePair[0].children[1].children[1];
		var powerText = keyValuePair[0].children[1].children[2];
		
		var rangeMin = keyValuePair[2];
		var rangeMax = keyValuePair[3];
		
		var percent = value > rangeMin ? (value - rangeMin) / (rangeMax - rangeMin) : rangeMin;
		
		barChart.setAttribute('width', percent * backgroundRect.getAttribute('width'));
		
		powerText.textContent = value;
	}
	
	keyValuePair = ui.gyroscope.find(kvp => kvp[1] === key);
	
	if (keyValuePair) {
		var rod = keyValuePair[0].children[2];
		var angleText = keyValuePair[0].children[3];
		var offset = keyValuePair[2];
		
		// Find proper coterminal angle
		var angle = Math.floor(value - offset);
		angle %= 360;
		if (angle < 0) {
			angle += 360;
		}

		rod.style.transform = `rotate(${angle}deg)`;
		angleText.textContent = angle + 'º';
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
		NetworkTables.putValue(networkTablesKey, event.target.value.toString());
	} else {
		NetworkTables.putValue(networkTablesKey, parseFloat(event.target.value));
	}
}