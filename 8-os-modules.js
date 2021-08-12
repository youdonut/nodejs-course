// OS
const os = require('os')
// method infor avout current user
const user = os.userInfo()

console.log(user);

//method returns the system uptime in seconds
const uptime = os.uptime()

console.log(`Uptime ${uptime} Seconds`);

const currentOS = {
    names: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);
