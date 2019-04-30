ui.camera = {
	viewer: document.getElementById('camera'),
	id: 0,
	srcs: [ // Will default to first camera
        'https://pbs.twimg.com/profile_images/1038851298160984064/bcFA1bxQ_400x400.jpg',
		'https://cdn-images-1.medium.com/max/2600/1*0KFB17_NGTPB0XWyc4BSgQ.jpeg'
    ]
};

// Unlike most addons, this addon doesn't interact with NetworkTables. Therefore, we won't need to add any NT listeners.

// When camera is clicked on, change to the next source.
ui.camera.viewer.onclick = function() {

    ui.camera.id += 1;
	if (ui.camera.id === ui.camera.srcs.length) ui.camera.id = 0;
	ui.camera.viewer.style.backgroundImage = 'url(' + ui.camera.srcs[ui.camera.id] + ')';
};