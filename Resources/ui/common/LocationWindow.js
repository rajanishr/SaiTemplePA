function LocationWindow(title) {
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
		
	//create object instance, a parasitic subclass of Observable
	//var self = Ti.UI.createView();
	var lat = 0;
	var lng = 0;	
	if (Ti.Geolocation.locationServicesEnabled) {
	    Titanium.Geolocation.purpose = 'Get Current Location';
	    Titanium.Geolocation.getCurrentPosition(function(e) {
	        if (e.error) {
	            Ti.API.error('@@@@@@@@@@@@@@@@@@@@Error: ' + e.error);
	        } else {
	            Ti.API.info(e.coords);
	            lat = e.coords.latitude;
	            lng = e.coords.longitude;
	            //Ti.API.info(lat);
	            //Ti.API.info(lng);
	        }
	    });
	} else {
	    alert('Please enable location services');
	}

	var mapview = Ti.Map.createView({
	    mapType: Ti.Map.STANDARD_TYPE,
	    region: {latitude:lat, 
	    		longitude:lng,
	            latitudeDelta:0.1,
	            longitudeDelta:0.1},
	    animate:true,
	    regionFit:true,
	    userLocation:true
	});
	self.add(mapview);

	mapview.addEventListener('complete', function(e) {
		Ti.API.info('complete');
		Ti.API.info(e);
	    Ti.Geolocation.forwardGeocoder('1100 Osburde Rd, Downingtown PA 19335', function(e) {
			Ti.API.info('REVERSEGEO');
			Ti.API.info(e);
		});
	});
	mapview.addEventListener('error', function(e) {
		Ti.API.info('error');
		Ti.API.info(e);
	});
	mapview.addEventListener('loading', function(e) {
		Ti.API.info('loading');
		Ti.API.info(e);
	});
	mapview.addEventListener('regionChanged', function(e) {
		//Ti.API.info('regionChanged');
		//Ti.API.info(e);
	});

	return self;
}

module.exports = LocationWindow;