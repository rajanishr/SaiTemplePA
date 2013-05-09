function Donate() {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff'
	});
	
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:'Donate',
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	return self;
};

module.exports = Donate;