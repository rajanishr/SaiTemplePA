function MoreWindow(title) {
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	// create table view data object
	var data = [
		{title:'Pooja Request', hasChild:false, test:'ui/common/more/poojareq', title_image:'/images/twitter_logo_header.png'},
		{title:'Social', hasChild:false, test:'ui/common/more/social', title_image:'/images/light-poweredby-foursquare.png'},
		{title:'Gallery', hasChild:false, test:'ui/common/more/gallery'},
		{title:'Mailing List', hasChild:false, test:'ui/common/more/mlist'},
		{title:'Donate', hasChild:false, test:'ui/common/more/donate'},
		{title:'About Temple', hasChild:false, test:'ui/common/more/about'},
		{title:'Ask a Question', hasChild:false, test:'ui/common/more/ask'}
	];
	
	//add iphone specific tests
	//if (Titanium.Platform.name == 'iPhone OS') {
	//	data.push({title:'RSS', hasChild:true, test:'ui/handheld/ios/more/rss', barColor:'#b40000'});
	//}
	 
	// create table view
	for (var i = 0; i < data.length; i++ ) {
		var d = data[i];
		// On Android, if touchEnabled is not set explicitly, its value is undefined.
		if (d.touchEnabled !== false) {
			d.color = '#000';
		}
		d.font = {fontWeight:'bold'};
	};
	
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow({title:e.rowData.title,containingTab:self.containingTab});
				
			if (e.rowData.barColor) {
				win.barColor = e.rowData.barColor;
			}
			if (e.rowData.title_image) {
				win.titleImage = e.rowData.title_image;
			}
			self.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	
	return self;
};

module.exports = MoreWindow;
