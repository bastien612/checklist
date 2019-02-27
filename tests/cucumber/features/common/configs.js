const os = require('os');

function getEnvironmentVar(varname, defaultvalue) {
    var result = process.env[varname];
    if (result != undefined) return result;
    else return defaultvalue;
}



exports.configs = {
    SELENIUM_HUB_URL: getEnvironmentVar('SELENIUM_HUB_URL', 'http://localhost:4444'),

    //Local
    BASE_URL: getEnvironmentVar('BASE_URL', 'http://10.68.176.42:3000'),

};

// function getIP() {
//   const ifaces = os.networkInterfaces();
//   let myIp = '127.0.0.1';

//   Object.keys(ifaces).forEach(function(ifname) {
//     let alias = 0;

//     ifaces[ifname].forEach(function(iface) {
//       if ('IPv4' !== iface.family || iface.internal !== false) {
//         // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
//         return;
//       }

//       if (alias >= 1) {
//         // this single interface has multiple ipv4 addresses
//         console.log(
//           'Plusieurs : ' + ifname + ':' + alias + ', ' + iface.address
//         );
//         myIp = JSON.stringify(iface.address);
//       } else {
//         // this interface has only one ipv4 adress
//         console.log('Une seule : ' + ifname + ', ' + iface.address);
//         myIp = JSON.stringify(iface.address);
//       }
//       ++alias;
//     });
//   });
//   return myIp;
// }
// console.log('ip : ' + getIP());