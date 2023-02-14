import { get } from "http";
import moment from 'moment';
import fs from 'fs';
import path from "path";
import EventEmitter from "events";
const newLocal = require('stream');
const { EventEmitter } = newLocal;
const server = http.createServer(async (req,res)=>{
    if(req.url === '/')
    fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
    })
    else if(req.url==='/api/current-time'){
        console.log(getCurrentTime());
       res.write(await getCurrentTime());
       res.end();
    }
    else if(req.url==='/api/person'){
        res.writeHead(200,{'Content_Type':'aplication/json'});
        const emmiter = new EventEmitter();
        emmiter.on('personReady',(person)=>{
            res.end(JSON.stringify(person));
        });
        setTimeout(()=>{
            emmiter.emit('personReady',{"id":24,"firstname":"farnaz","lastname":"madadi","age":17});
        },3000);
    }
})

async function getCurrentTime(){
    return momen().format('YYY-MM_DD hh:mm:ss');
}
server.listen(3000,()=>{
    console.log("server is gonna run on port 3000");
});