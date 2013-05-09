//FirstView Component Constructor
function FirstView() {
	
	var osname = Ti.Platform.osname;
	var mainImg = '/images/baba_main.png';
	
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundImage : '/images/baba_main.png'
	});
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Sai Temple PA'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	return self;
}

module.exports = FirstView;
