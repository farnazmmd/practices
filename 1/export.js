function log(){
    console.log("this is for exporting in another file!");
    setTimeout( () => {
console.log("farnaz madadi");
    },1000)
}

log();
 
module.exports = log;