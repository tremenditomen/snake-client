
const net = require("net");

const myNumber = 42;
const myString = "hello";
const myFunction = () => {
  // myFunction's code
};
const connect = function () {
    const conn = net.createConnection({
      host: '135.23.223.133',
      port: 50542
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on('data', (data)=>{
  
      console.log(data)
    })
    conn.on ("connect" ,()=>{
      console.log("we connected :D")
      conn.write ("Name: Lui")

    })
    return conn;
};

console.log("Connecting ...");
connect();
  module.exports = {myNumber, myString, myFunction}