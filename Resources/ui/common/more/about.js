function About() {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff'
	});
	
	Ti.App.fireEvent('show_indicator');
	// Create a WebView
	var aWebView = Ti.UI.createWebView({
		url : 'http://saitemplepa.com/index.php/mnuitem-about-temple'
	});
	aWebView.addEventListener('load', function(e) {
		Ti.API.info('webview loaded: '+ e.url);
	});
	// Add to the parent view.
	self.add(aWebView);
	
	return self;
};

module.exports = About;