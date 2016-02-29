
var gulp = require('gulp');
gulp.watch('./epub/**/*.xhtml').on('change', function (file) {
        console.log('file changed');
        console.log(file);
        fileChanged = file;
        var fileContent = fs.readFileSync(file.path, "utf8");
        io.sockets.emit('hot-reload', {
            'file' : file,
            'content' : fileContent
            }
        );
}); 

var socketio = require('socket.io');
var fs = require("fs");
var exec = require('exec');
//Need to create config file
var io = socketio.listen('3002', function (err, msg) {
    if (err) {
        console.error(err);
    }
});

var fileChanged = null;

io.on('connection', function (socket) {
    console.log('a client connected');
    socket.on('disconnect', function () {
        console.log('a client disconnected');
    });
    socket.on('received-content', function(data){
        var filePathOnReader = data.path; 
        var newFilePath = fileChanged.path;
        
        //Need a switch here
        if(data.RS === 'readium'){
            //Need to find out how to get the real path from Readium
            var cmd = 'cat '+newFilePath+' > /Users/quentin/Sites/readium-viewer/readium-js-viewer/epub_content/myfile/OEBPS/Text/cover.xhtml';
        }else {
            var cmd = 'cat '+newFilePath+' >'+ filePathOnReader;    
        }
        
        console.log('cmd');
        console.log(cmd);

        exec(cmd, function(err, out, code){
            process.stderr.write(err);
            process.stdout.write(out);
            socket.emit('file_updated', {'RS': data.RS});
        });
        
        console.log('contneu recu');
        console.log(data);
    });
});