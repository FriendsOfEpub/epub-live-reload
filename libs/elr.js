var ReadingSystem = navigator.epubReadingSystem;
console.log(ReadingSystem);

//needs config
var socketHotReload = io.connect('http://127.0.0.1:3002');
socketHotReload.on('file_updated', function(data){	
	//console.log(data);
	if(data.RS == 'ibooks'){
		location.reload();
	//currently else === Readium. it's an iframe
	}else {
		window.parent.location.href = window.parent.location.href;
	}
});

socketHotReload.on('hot-reload', function (data) {
		//ibooks
		if(window.parent === window){
			console.log("update");
		      socketHotReload.emit('received-content',
		      {
		          'path' : window.location.pathname,
		          'RS' : 'ibooks'
		      }
		   	 );                    
		}else{
			//READIUM
			socketHotReload.emit('received-content',
		      {
		          'path' : window.location.pathname,
		          'RS' : 'readium'
		      });
      //var newHTML = document.createElement('html');
      //newHTML.textContent = data.content;
      //window.parent.document.replaceChild(document.getElementsByTagName('html')[0], newHTML);
     // window.parent.appendChild(newHTML);
			//document.getElementsByTagName('html')[0].textContent = data.content;
		}
    //document.body.innerHTML = data;
});
