const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + "/public"));

app.get('/',(req,res)=>{
  sendFile(__dirname + '/public/index.html');
});

server.listen(3000,()=>{
  console.log('listening on port 3000');
})

io.on('connection',socket=>{
  socket.on('newInput',data=>{
    io.emit('addChat',socket.name + ":" + data)
  });

  socket.on('newSocket',newName =>{
    socket.name = newName;
  })
})
