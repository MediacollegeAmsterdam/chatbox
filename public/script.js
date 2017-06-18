const socket = io();
const myChat = document.getElementById("myChat");
const chatRoom = document.getElementById("chatRoom");
const myInput = document.getElementById("myInput");
var firstInput = true;

addEventListener("keydown", ev => {
    if (ev.keyCode == 13) {
        if (firstInput) {
            socket.emit('newSocket', myInput.value);
            firstInput = false;
        } else {
            socket.emit('newInput', myInput.value);
        }
        myInput.value = "";
    }
});

socket.on("addChat", data => {
    chatRoom.innerHTML = "<p>" + data + "</p>" + chatRoom.innerHTML;
});
