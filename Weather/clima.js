const credentials = require('./credentials.js')

const geocode = function(ciudad, callback) {
	setTimeout( function(){
		const data = {
			lat: 0,
			long: 0
		}
		callback(data)
	}, 2000)
}