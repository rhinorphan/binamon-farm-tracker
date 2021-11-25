
//Function to get and display mission's rewards balance
function balanceMission(a, b, c, d, e, f, g) {
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

// Function to get and display time left for mission's staking, with the help of secondsToString method
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
var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0xC7FbF510f0745B9Ecce36D349F689C885690FFb4&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
var id1 = "mission1"
var currency = " BMON"
var id2 = "status1"
var status1 = 'Mission 1 - 🔴'
var status2 = 'Mission 1 - 🟠'
var status3 = 'Mission 1 - 🟢'
var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13387148&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
var id3 = "mission1_timeleft"
var status_time = "Ongoing 🕙 "

balanceMission(mission, id1, currency, id2, status1, status2, status3)
timeLeft(time,id3,status_time)

//Mission 2
var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0x8E18be8BF645e884c673d22d2D307ae4Aa4759F1&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
var id1 = "mission2"
var currency = " BUSD"
var id2 = "status2"
var status1 = 'Mission 2 - 🔴'
var status2 = 'Mission 2 - 🟠'
var status3 = 'Mission 2 - 🟢'
var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13409638&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
var id3 = "mission2_timeleft"
var status_time = "Ongoing 🕙 "

balanceMission(mission, id1, currency, id2, status1, status2, status3)
timeLeft(time,id3,status_time)

setTimeout(function() {
  //Mission 3
  var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0xe5F84d6c9AE7FFa51D0575De7D2dA734e4f44b28&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
  var id1 = "mission3"
  var currency = " BUSD"
  var id2 = "status3"
  var status1 = 'Mission 3 - 🔴'
  var status2 = 'Mission 3 - 🟠'
  var status3 = 'Mission 3 - 🟢'
  var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13409638&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
  var id3 = "mission3_timeleft"
  var status_time = "Ongoing 🕙 "

  balanceMission(mission, id1, currency, id2, status1, status2, status3)
  timeLeft(time,id3,status_time)

  //Mission 4
  var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0xEb19bFe72e9919D7c30247C4961a9AcB2C33bf01&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
  var id1 = "mission4"
  var currency = " BUSD"
  var id2 = "status4"
  var status1 = 'Mission 4 - 🔴'
  var status2 = 'Mission 4 - 🟠'
  var status3 = 'Mission 4 - 🟢'
  var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13409638&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
  var id3 = "mission4_timeleft"
  var status_time = "Ongoing 🕙 "

  balanceMission(mission, id1, currency, id2, status1, status2, status3)
  timeLeft(time,id3,status_time)

  setTimeout(function() {
    //Mission 5
    var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x19713304faFf9b05Ef9b7Ae603f3B2282633BBd8&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
    var id1 = "mission5"
    var currency = " BMON"
    var id2 = "status5"
    var status1 = 'Mission 5 - 🔴'
    var status2 = 'Mission 5 - 🟠'
    var status3 = 'Mission 5 - 🟢'
    var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13505255&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
    var id3 = "mission5_timeleft"
    var status_time = "Ongoing 🕙 "

    balanceMission(mission, id1, currency, id2, status1, status2, status3)
    timeLeft(time,id3,status_time)

    //Mission 6
    var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x7DBb99EDd369Ce3B01B83C9d109Ba211e3d77A68&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
    var id1 = "mission6"
    var currency = " BMON"
    var id2 = "status6"
    var status1 = 'Mission 6 - 🔴'
    var status2 = 'Mission 6 - 🟠'
    var status3 = 'Mission 6 - 🟢'
    var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13529842&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
    var id3 = "mission6_timeleft"
    var status_time = "Ongoing 🕙 "

    balanceMission(mission, id1, currency, id2, status1, status2, status3)
    timeLeft(time,id3,status_time)

    setTimeout(function() {
      //Mission 7
       mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x3ee2200efb3400fabb9aacf31297cbdd1d435d47&address=0xa9Fb5E53e45472C776FBF969f7a15c4207B0bad7&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
      var id1 = "mission7"
      var currency = " ADA"
      var id2 = "status7"
      var status1 = 'Mission 7 - 🔴'
      var status2 = 'Mission 7 - 🟠'
      var status3 = 'Mission 7 - 🟢'
      var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=12258583&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
      var id3 = "mission7_timeleft"
      var status_time = "Ongoing 🕙 "

      balanceMission(mission, id1, currency, id2, status1, status2, status3)
      timeLeft(time,id3,status_time)

      //Mission 8
      var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x80e15fe54e9d155f8366187a6a32bdef9c2366c4&address=0xE879877D6e6FAA429B9963b0D01c1Dac880Dc244&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
      var id1 = "mission8"
      var currency = " BMON-Z1"
      var id2 = "status8"
      var status1 = 'Mission 8 - 🔴'
      var status2 = 'Mission 8 - 🟠'
      var status3 = 'Mission 8 - 🟢'
      var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=12287967&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
      var id3 = "mission8_timeleft"
      var status_time = "Ongoing 🕙 "

      balanceMission(mission, id1, currency, id2, status1, status2, status3)
      timeLeft(time,id3,status_time)
      
      setTimeout(function() {
        //Mission 9
         mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x8C15F3FCa9B009e108528751E5614318D7B10f91&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
        var id1 = "mission9"
        var currency = " BMON"
        var id2 = "status9"
        var status1 = 'Mission 9 - 🔴'
        var status2 = 'Mission 9 - 🟠'
        var status3 = 'Mission 9 - 🟢'
        var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=12288226&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
        var id3 = "mission9_timeleft"
        var status_time = "Ongoing 🕙 "
  
        balanceMission(mission, id1, currency, id2, status1, status2, status3)
        timeLeft(time,id3,status_time)
  
        //Mission 10
        var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x480FAc2dbd3532D37e07BF478dF5d019208adB32&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
        var id1 = "mission10"
        var currency = " BMON"
        var id2 = "status10"
        var status1 = 'Mission 10 - 🔴'
        var status2 = 'Mission 10 - 🟠'
        var status3 = 'Mission 10 - 🟢'
        var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=12324053&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
        var id3 = "mission10_timeleft"
        var status_time = "Ongoing 🕙 "
  
        balanceMission(mission, id1, currency, id2, status1, status2, status3)
        timeLeft(time,id3,status_time)

        setTimeout(function() {
          //Mission 11
           mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x80e15fe54e9d155f8366187a6a32bdef9c2366c4&address=0x5785C96001671522808A8e773288dCa0Eb7bd63c&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
          var id1 = "mission11"
          var currency = " BMON-Z1"
          var id2 = "status11"
          var status1 = 'Mission 11 - 🔴'
          var status2 = 'Mission 11 - 🟠'
          var status3 = 'Mission 11 - 🟢'
    
          balanceMission(mission, id1, currency, id2, status1, status2, status3)
    
          //Mission 12
          var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x0F38BC6604CfDC93FDF2468Dd1f0193a3d463281&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
          var id1 = "mission12"
          var currency = " BMON"
          var id2 = "status12"
          var status1 = 'Mission 12 - 🔴'
          var status2 = 'Mission 12 - 🟠'
          var status3 = 'Mission 12 - 🟢'
          var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=12316140&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
          var id3 = "mission12_timeleft"
          var status_time = "Ongoing 🕙 "
    
          balanceMission(mission, id1, currency, id2, status1, status2, status3)
          timeLeft(time,id3,status_time)

          //Mission 13
          mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x55d398326f99059ff775485246999027b3197955&address=0xB2D2f8223140611e1c2a752d62001E6b6BdC0889&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
          var id1 = "mission13"
          var currency = " USDT"
          var id2 = "status13"
          var status1 = 'Mission 13 - 🔴'
          var status2 = 'Mission 13 - 🟠'
          var status3 = 'Mission 13 - 🟢'
    
          balanceMission(mission, id1, currency, id2, status1, status2, status3)

          //Mission 14
          var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0x7d0cdd23D8F0b8A9D0d6f5Eef77ADb4BaA551Afb&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
          var id1 = "mission14"
          var currency = " BUSD"
          var id2 = "status14"
          var status1 = 'Mission 14 - 🔴'
          var status2 = 'Mission 14 - 🟠'
          var status3 = 'Mission 14 - 🟢'
    
          balanceMission(mission, id1, currency, id2, status1, status2, status3)

          setTimeout(function() {
            //Mission 15
            var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x943FC42488e8fCc6B3B19E61E33C07143C14F9C8&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
            var id1 = "mission15"
            var currency = " BMON"
            var id2 = "status15"
            var status1 = "Mission 15 - 🔴"
            var status2 = "Mission 15 - 🟠"
            var status3 = "Mission 15 - 🟢"
            var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=14425356&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
            var id3 =  "mission15_timeleft"
            var status_time = "Ongoing 🕙 "

            balanceMission(mission, id1, currency, id2, status1, status2, status3)
            timeLeft(time,id3,status_time)

            //Mission 16
            var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xd8813b5dfa9abeb693f217bb905ec99b66fb017c&address=0xEB37a4517A85AAE584cCd8BB13B5C050fFF4A15F&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
            var id1 = "mission16"
            var currency = " BNRG"
            var id2 = "status16"
            var status1 = "Mission 16 - 🔴"
            var status2 = "Mission 16 - 🟠"
            var status3 = "Mission 16 - 🟢"
            var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=14448435&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
            var id3 =  "mission16_timeleft"
            var status_time = "Ongoing 🕙 "

            balanceMission(mission, id1, currency, id2, status1, status2, status3)
            timeLeft(time,id3,status_time)

            setTimeout(function() {
              //Mission 17
              var mission = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xd8813b5dfa9abeb693f217bb905ec99b66fb017c&address=0x73C112a24a0A2d17fDf93930F8f67bBf6B4bdDC5&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
              var id1 = "mission17"
              var currency = " BNRG"
              var id2 = "status17"
              var status1 = "Mission 17 - 🔴"
              var status2 = "Mission 17 - 🟠"
              var status3 = "Mission 17 - 🟢"
              var time = 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=14448435&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T'
              var id3 =  "mission17_timeleft"
              var status_time = "Ongoing 🕙 "
  
              balanceMission(mission, id1, currency, id2, status1, status2, status3)
              timeLeft(time,id3,status_time)
            }, 1500)
          }, 1500)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1500)
}, 2000)



