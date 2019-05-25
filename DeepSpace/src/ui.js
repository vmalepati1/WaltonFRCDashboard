let ui = {
    timer: document.getElementById('w-node-14012e7d8a0d-6cf0ea0e'),
    robotState: document.getElementById('w-node-6ca20209b32e-6cf0ea0e'),
	camera: {
		viewer: document.querySelector('.image-2'),
		id: 0,
		srcs: [ // Will default to first camera
			'http://10.29.74.11:5801',
			'https://wallpaperplay.com/walls/full/5/3/0/10478.jpg',
			'http://4.bp.blogspot.com/-7FFzCzLpXJU/UsDaQ8msxtI/AAAAAAAAFNk/wBnDqMKqJqo/s1600/desktop+free+wallpaper+download+20149.jpg'
		]
	},
	configurationBox: [
		[document.getElementById('Constants-KV'), '/WaltonDashboard/Constants/KV'],
		[document.getElementById('Constants-KAcc'), '/WaltonDashboard/Constants/KAcc'],
		[document.getElementById('Constants-KK'), '/WaltonDashboard/Constants/KK'],
		[document.getElementById('Constants-KS'), '/WaltonDashboard/Constants/KS'],
		[document.getElementById('Constants-KAngle'), '/WaltonDashboard/Constants/KAngle'],
		[document.getElementById('Constants-Max-Velocity'), '/WaltonDashboard/Constants/Max Velocity'],
		[document.getElementById('Constants-Max-Acceleration'), '/WaltonDashboard/Constants/Max Acceleration'],
		[document.getElementById('Constants-KL'), '/WaltonDashboard/Constants/KL'],
		[document.getElementById('Motion-Front-Rocket-X'), '/WaltonDashboard/Motion/Front Rocket X'],
		[document.getElementById('Transform-Select'), '/WaltonDashboard/Driveteam/Transform Select'],
		[document.getElementById('Motion-Front-Rocket-Y'), '/WaltonDashboard/Motion/Front Rocket Y'],
		[document.getElementById('Motion-Front-Rocket-Angle'), '/WaltonDashboard/Motion/Front Rocket Angle'],
		[document.getElementById('Motion-BackUp-X'), '/WaltonDashboard/Motion/BackUp X'],
		[document.getElementById('Motion-BackUp-Y'), '/WaltonDashboard/Motion/BackUp Y'],
		[document.getElementById('Motion-BackUp-Angle'), '/WaltonDashboard/Motion/BackUp Angle'],
		[document.getElementById('Motion-Hatch-PickUp-X'), '/WaltonDashboard/Motion/Hatch PickUp X'],
		[document.getElementById('Motion-Hatch-PickUp-Y'), '/WaltonDashboard/Motion/Hatch PickUp Y'],
		[document.getElementById('Motion-Hatch-PickUp-Angle'), '/WaltonDashboard/Motion/Hatch PickUp Angle'],
		[document.getElementById('Autonomous-Select'), 'Auton'],
		[document.getElementById('Motion-Distance'), '/WaltonDashboard/Motion/Distance'],
		[document.getElementById('Alignment-Steer-K'), '/WaltonDashboard/Alignment/Steer K'],
		[document.getElementById('Alignment-Drive-K'), '/WaltonDashboard/Alignment/Drive K'],
		[document.getElementById('Alignment-Camera-Distance'), '/WaltonDashboard/Alignment/Camera Distance']
	],
	diagnosticsTiles: [
		[document.getElementById('w-node-ece068a8fbe3-6cf0ea0e'), '/WaltonDashboard/Motors/Elevator Height'],
		[document.getElementById('w-node-6456cc18dbb4-6cf0ea0e'), '/WaltonDashboard/Motors/Hatch Angle'],
		[document.getElementById('w-node-795b9b2337a4-6cf0ea0e'), '/WaltonDashboard/Motors/Intake Open'],
		[document.getElementById('w-node-8e498667928f-6cf0ea0e'), '/WaltonDashboard/Drivetrain/rightMotor'],
		[document.getElementById('w-node-d58ddcae3769-6cf0ea0e'), '/WaltonDashboard/Motors/Cargo Angle'],
		[document.getElementById('w-node-33d94c8c1081-6cf0ea0e'), '/WaltonDashboard/Motors/Lower Limit'],
		[document.getElementById('w-node-d4c27eac3f93-6cf0ea0e'), '/WaltonDashboard/Motors/Elevator Forwards Soft Limit'],
		[document.getElementById('w-node-45d40d43c455-6cf0ea0e'), '/WaltonDashboard/Motors/Elevator Reverse Soft Limit'],
		[document.getElementById('w-node-633d385417e5-6cf0ea0e'), '/WaltonDashboard/Motors/Claw Forwards Soft Limit'],
		[document.getElementById('w-node-2b4d1c09f1c8-6cf0ea0e'), '/WaltonDashboard/Motors/Claw Reverse Soft Limit'],
		[document.getElementById('w-node-15b66f493392-6cf0ea0e'), '/WaltonDashboard/Motors/Hatch Forwards Soft Limit'],
		[document.getElementById('w-node-65026c0c8959-6cf0ea0e'), '/WaltonDashboard/Motors/Hatch Reverse Soft Limit'],
		[document.getElementById('w-node-0874236dabf0-6cf0ea0e'), '/WaltonDashboard/Motors/State'],
		[document.getElementById('w-node-230f5958393e-6cf0ea0e'), '/WaltonDashboard/Motors/Elevator Mode'],
		[document.getElementById('w-node-0827ba0ef127-6cf0ea0e'), '/WaltonDashboard/Motors/Cargo Mode'],
		[document.getElementById('w-node-fc40adc9d11f-6cf0ea0e'), '/WaltonDashboard/Motors/Hatch Mode'],
		[document.getElementById('w-node-3dae72b756e1-6cf0ea0e'), '/WaltonDashboard/Motors/Elevator Power'],
		[document.getElementById('w-node-6ab5de7d522d-6cf0ea0e'), '/WaltonDashboard/Motors/Elevator Target'],
		[document.getElementById('w-node-5c897ecfedd4-6cf0ea0e'), '/WaltonDashboard/Motors/Hatch Power'],
		[document.getElementById('w-node-2dd40fb21b0e-6cf0ea0e'), '/WaltonDashboard/Motors/Hatch Target'],
		[document.getElementById('w-node-2d309eb47a59-6cf0ea0e'), '/WaltonDashboard/Motors/Cargo Power'],
		[document.getElementById('w-node-4e1151804e61-6cf0ea0e'), '/WaltonDashboard/Motors/Cargo Target'],
		[document.getElementById('w-node-1a75b8348af0-6cf0ea0e'), '/WaltonDashboard/Motors/Climber Power'],
		[document.getElementById('w-node-e58751785c7a-6cf0ea0e'), '/WaltonDashboard/Motors/Climber Mode'],
		[document.getElementById('w-node-828d4271a53a-6cf0ea0e'), '/WaltonDashboard/Drivetrain/Position'],
		[document.getElementById('w-node-9971a8c5e074-6cf0ea0e'), '/WaltonDashboard/Drivetrain/Encoder Right'],
		[document.getElementById('w-node-04c10c4157ee-6cf0ea0e'), '/WaltonDashboard/Drivetrain/Encoder Left'],
		[document.getElementById('w-node-39646deb58ba-6cf0ea0e'), '/WaltonDashboard/Drivetrain/leftSpeed'],
		[document.getElementById('w-node-6a6121c16e8e-6cf0ea0e'), '/WaltonDashboard/Drivetrain/rightSpeed'],
		[document.getElementById('w-node-75d3c40bd623-6cf0ea0e'), '/WaltonDashboard/Drivetrain/leftMotor'],
		[document.getElementById('w-node-3b7aac34ca61-6cf0ea0e'), '/WaltonDashboard/Debug/Camera Vision'],
		[document.getElementById('w-node-4016fdf5dfa0-6cf0ea0e'), '/WaltonDashboard/Debug/Has Valid Camera Data'],
		[document.getElementById('w-node-d5982c31738d-6cf0ea0e'), '/WaltonDashboard/Debug/Dial']
	],
	generalStatistics: [
		[document.querySelector('.progress-ring-bv'), '/WaltonDashboard/Diagnostics/Battery Voltage', 0.0, 12.0, 'v'],
		[document.querySelector('.progress-ring-cpu'), '/WaltonDashboard/Diagnostics/RIO CPU Use', 0.0, 100.0, '%'],
		[document.querySelector('.progress-ring-pd'), '/WaltonDashboard/Diagnostics/Power Draw', 0.0, 40.0, 'A'],
		[document.querySelector('.progress-ring-ram'), '/WaltonDashboard/Diagnostics/RIO RAM Use', 0.0, 100.0, '%']
	],
	powerUsageBox: [
		[document.getElementById('fl-motor-pu'), '/WaltonDashboard/Diagnostics/Front Left Motor Power Usage', 0.0, 25.0],
		[document.getElementById('fr-motor-pu'), '/WaltonDashboard/Diagnostics/Front Right Motor Power Usage', 0.0, 25.0],
		[document.getElementById('bl-motor-pu'), '/WaltonDashboard/Diagnostics/Back Left Motor Power Usage', 0.0, 25.0],
		[document.getElementById('br-motor-pu'), '/WaltonDashboard/Diagnostics/Back Right Motor Power Usage', 0.0, 25.0],
		[document.getElementById('climber-motor-pu'), '/WaltonDashboard/Diagnostics/Climber Motor Power Usage', 0.0, 25.0],
		[document.getElementById('roborio-pu'), '/WaltonDashboard/Diagnostics/RIO Power Usage', 0.0, 25.0]
	],
	motorPowersBox: [
		[document.getElementById('fl-wheel-power'), '/WaltonDashboard/Drivetrain/leftMotor', -1.0, 1.0],
		[document.getElementById('fr-wheel-power'), '/WaltonDashboard/Drivetrain/rightMotor', -1.0, 1.0],
		[document.getElementById('bl-wheel-power'), '/WaltonDashboard/Drivetrain/leftMotor', -1.0, 1.0],
		[document.getElementById('br-wheel-power'), '/WaltonDashboard/Drivetrain/rightMotor', -1.0, 1.0],
		[document.getElementById('climber-motor-power'), '/WaltonDashboard/Motors/Climber Power', -1.0, 1.0]
	],
	gyroscope: [
		[document.getElementById('gyro'), '/WaltonDashboard/Diagnostics/Gyro Orientation', 0.0]
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
		var statisticCircle = keyValuePair[0].children[1].children[0];
		var statisticText = keyValuePair[0].children[1].children[1];
		
		var rangeMin = keyValuePair[2];
		var rangeMax = keyValuePair[3];
		var unit = keyValuePair[4];
		
		// Convert value ranged between 0 to 1 (real percentage value) to a range between 0 to 100
		if (unit == '%') {
			value *= 100.0;
		}
		
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