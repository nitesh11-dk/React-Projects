import { Server } from "socket.io";

const io = new Server({
cors:{
    origin:"http://localhost:5173",
}
});

io.listen(3001);

const characters = [];

function getRandomPosition(){
  return [
    Math.random()*3,
    0,
    Math.random()*3,
  ]
}
function getRandomColor(){
  return `#${Math.floor(Math.random()*16777215).toString(16)}`  
}

io.on("connection",(socket)=>{
  
  console.log("user connected");

characters.push({
  id:socket.id,
  position:getRandomPosition(),
  topColor:getRandomColor(),
  hairColor:getRandomColor(),
  bottomColor:getRandomColor(),
})

socket.emit("message","hello world");  
io.emit("characters",characters); 

socket.on("move", (position) => {
  let character = characters.find((c) => c.id === socket.id);
  character.position = position;  
  io.emit("characters",characters);
})

socket.on("disconnect", () => {
    console.log("user disconnected");

    characters.splice(characters.findIndex((c) => c.id === socket.id), 1);
    io.emit("characters",characters);
  });

})