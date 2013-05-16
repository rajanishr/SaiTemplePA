function Donate() {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff'
	});
	

	Ti.App.fireEvent('show_indicator');
	// Create a WebView
	var aWebView = Ti.UI.createWebView({
		url : 'http://developer.appcelerator.com'
	});
	aWebView.addEventListener('load', function(e) {
		Ti.API.info('webview loaded: '+ e.url);
	});
	// Add to the parent view.
	self.add(aWebView);

	return self;
};

module.exports = Donate;