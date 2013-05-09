function MainNavBar(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create module instance
	var HomeWindow = require('ui/common/HomeWindow'),
		LocationWindow = require('ui/common/LocationWindow'),
		MoreWindow = require('ui/common/MoreWindow');
	
	//create app tabs
	var homeWin = new HomeWindow(L('home')),
		locnWin = new LocationWindow(L('locn'));
		moreWin = new MoreWindow(L('more'));
	
	var homeTab = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: homeWin
	});
	homeWin.containingTab = homeTab;
	self.addTab(homeTab);
	
	var locnTab = Ti.UI.createTab({
		title: L('locn'),
		icon: '/images/KS_nav_views.png',
		window: locnWin
	});
	locnWin.containingTab = locnTab;
	self.addTab(locnTab);
	
	var moreTab = Ti.UI.createTab({
		title: L('more'),
		icon: '/images/KS_nav_views.png',
		window: moreWin
	});
	moreWin.containingTab = moreTab;
	self.addTab(moreTab);
	
	return self;
};

module.exports = MainNavBar;
