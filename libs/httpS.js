var httpServer = require('http-server');
var   os         = require('os');
var options = {};
var port = host = "";

var ifaces = os.networkInterfaces();


var address = [];
var Myserver = {
	run : function(){
		server = httpServer.createServer(options);
  		server.listen(function(){
		  	Object.keys(ifaces).forEach(function (dev) {
		        ifaces[dev].forEach(function (details) {
		          if (details.family === 'IPv4') {
		            address.push(details.address);		            
		          }
		        });
      		});
		})		
	},
	getAddresses(){
		console.log("tot");
		console.log(address);
		return address;
	}

}


 
module.exports= Myserver;
  