function Donate() {
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff'
	});
	

	Ti.App.fireEvent('show_indicator');
	Titanium.Platform.openURL('https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx');
	/*
	var webview = Ti.UI.createWebView();
	self.add(webview);
	 
	var xhr = Ti.Network.createHTTPClient();
	xhr.open('POST', 'https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx');
	xhr.onload = function () {
	    webview.html = this.responseText;
	};
	xhr.send({
	    LinkId: 'ab9feda8-7e88-42e5-9696-730863e9fa0e'
	});
	*/
 
	return self;
};

module.exports = Donate;