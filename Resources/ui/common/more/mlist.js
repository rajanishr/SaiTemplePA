function MList() {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff'
	});
	
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:'Mailing List',
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	return self;
};

module.exports = MList;