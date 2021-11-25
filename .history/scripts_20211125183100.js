
//Function to get and display farm's rewards balance
function balanceFarm(a, b, c, d, e, f, g) {
  var request = new XMLHttpRequest()

  request.open('GET', a, true)
  request.onload = function () {

    var data = JSON.parse(this.response)

    document.getElementById(b).innerHTML = ((data.result)/1000000000000000000).toFixed(3) + c;

    if (data.result < 1000000000000000000000) {
      document.getElementById(d).innerHTML = e
    } else if (data.result < 5000000000000000000000) {
      document.getElementById(d).innerHTML = f
    } else if (data.result > 5000000000000000000000) {
      document.getElementById(d).innerHTML = g;
    }
  }

  request.send()
}

// Convert time in seconds to day + hour + minute + second
const intervalToLevels = (interval, levels) => {
  const cbFun = (d, c) => {
    let bb = d[1] % c[0],
      aa = (d[1] - bb) / c[0];
    aa = aa > 0 ? aa + c[1] : '';

    return [d[0] + aa, bb];
  };

  let rslt = levels.scale.map((d, i, a) => a.slice(i).reduce((d, c) => d * c))
    .map((d, i) => ([d, levels.units[i]]))
    .reduce(cbFun, ['', interval]);
  return rslt[0];
};

const TimeLevels = {
  scale: [24, 60, 60, 1],
  units: ['d ', 'h ', 'm ', 's ']
};
const secondsToString = interval => intervalToLevels(interval, TimeLevels);

// Function to get and display time left for farm's staking, with the help of secondsToString method
function timeLeft(a,b,c) {
  var request = new XMLHttpRequest()

  request.open('GET', a, true)
  request.onload = function () {

    var data = JSON.parse(this.response)

    if (data.result.EstimateTimeInSec > 0) {
      document.getElementById(b).innerHTML = c + secondsToString(data.result.EstimateTimeInSec);
    } else {
    document.getElementById(b).innerHTML = "Ended 💀";
    }
  }

  request.send()
}

//Mission 1
var farm = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0xC7FbF510f0745B9Ecce36D349F689C885690FFb4&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
var id1 = "farm1"
var currency = " BNRG"
var id2 = "status1"
var status1 = 'Farm 1 - 🔴'
var status2 = 'Farm 1 - 🟠'
var status3 = 'Farm 1 - 🟢'
var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13387148&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
var id3 = "farm1_timeleft"
var status_time = "Ongoing 🕙 "

balanceFarm(farm, id1, currency, id2, status1, status2, status3)
timeLeft(time,id3,status_time)

//Farm 2
var farm = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xd8813b5dfa9abeb693f217bb905ec99b66fb017c&address=0x8E18be8BF645e884c673d22d2D307ae4Aa4759F1&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
var id1 = "farm2"
var currency = " BNRG"
var id2 = "status2"
var status1 = 'Farm 2 - 🔴'
var status2 = 'Farm 2 - 🟠'
var status3 = 'Farm 2 - 🟢'
var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13409638&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
var id3 = "farm2_timeleft"
var status_time = "Ongoing 🕙 "

balanceMission(farm, id1, currency, id2, status1, status2, status3)
timeLeft(time,id3,status_time)

setTimeout(function() {
  //Farm 3
  var farm = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xd8813b5dfa9abeb693f217bb905ec99b66fb017c&address=0xC0ff1c5B24479C299072D74826cbE3b1E6ced5c9&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
  var id1 = "farm3"
  var currency = " BNRG"
  var id2 = "status3"
  var status1 = 'Farm 3 - 🔴'
  var status2 = 'Farm 3 - 🟠'
  var status3 = 'Farm 3 - 🟢'
  var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13409638&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
  var id3 = "farm3_timeleft"
  var status_time = "Ongoing 🕙 "

  balanceMission(farm, id1, currency, id2, status1, status2, status3)
  timeLeft(time,id3,status_time)

  // Mission 4
  // var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0xEb19bFe72e9919D7c30247C4961a9AcB2C33bf01&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
  // var id1 = "mission4"
  // var currency = " BUSD"
  // var id2 = "status4"
  // var status1 = 'Mission 4 - 🔴'
  // var status2 = 'Mission 4 - 🟠'
  // var status3 = 'Mission 4 - 🟢'
  // var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13409638&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
  // var id3 = "mission4_timeleft"
  // var status_time = "Ongoing 🕙 "

  // balanceMission(mission, id1, currency, id2, status1, status2, status3)
  // timeLeft(time,id3,status_time) 

  //setTimeout(function() {
  
  //}, 1500)
}, 2000)



