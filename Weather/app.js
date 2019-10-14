const clima =  require('./clima.js')

clima.geocode('Saltillo', function(error,data){
	if(error){
		console.log(error)
	}else{
		clima.tiempo(data.coord[1],data.coord[0], function(error,data){
			if(error){
				console.log(error)
			} else {
				console.log('Saltillo\n')
				console.log(data)
			}
		})
	}
})