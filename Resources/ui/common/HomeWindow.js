function HomeWindow(title) {
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundImage : '/images/baba_main.png',
		backgroundColor:'white'
	});
	
	return self;
};

module.exports = HomeWindow;
