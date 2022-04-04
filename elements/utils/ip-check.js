const IPCIDR = require("ip-cidr");


/**
 * @class IpDetect
 * @classdesc Utility for detecting type of IP and if it is in campus ip list and vpn ips
 */
export class IpDetect {
  constructor(){
    this.ip = '';
    this.hasIP6 = false;
    this.ip6 = '';
    this.ipVPNRange = [
      {"setIP":"128.120.234.0", "mask":"24"},
      {"setIP":"128.120.235.0", "mask":"24"},
      {"setIP":"128.120.236.0", "mask":"24"},
      {"setIP":"128.120.237.0", "mask":"24"},
      {"setIP":"128.120.238.0", "mask":"24"},
      {"setIP":"128.120.239.0", "mask":"24"},
      {"setIP":"128.120.251.0", "mask":"24"},
      {"setIP":"169.237.45.0", "mask":"24"},
    ];

    this.campusRange = [
      {"setIP":"128.120.0.0", "mask":"16"},
      {"setIP":"152.79.0.0", "mask":"16"},
      {"setIP":"169.237.0.0", "mask":"16"},
      {"setIP":"162.251.203.0", "mask":"27"},
      {"setIP":"12.235.42.0", "mask":"25"},
      {"setIP":"168.150.0.0", "mask":"17"},

    ];
    
    this.isVPN = false;
    this.runIP();
  }
  /**
   * @method runIP
   * @description This runs the ip check services
   * 
   */
  async runIP(){
    this.isResult = await this.verifyCidr(this.campusRange, this.ipVPNRange);
  }

  /**
   * @method checkIp
   * @description This retrieves the host's ip address
   * 
   */
  async checkIp(){
    let ips;
    await fetch('https://api64.ipify.org?format=json', )
      .then(response => response.json())
      .then(data => {ips = data; });
    this.ip = ips["ip"];

    if (this.ip.includes(":")){
      this.hasIP6 = true;
      this.ip6 = this.ip;
      await fetch('https://api.ipify.org?format=json', )
        .then(response => response.json())
        .then(data => {ips = data; });
      this.ip = ips["ip"];
    } 

  }

  /**
   * @method isInRange
   * @description verify if the ip is in the range given
   * 
   * @param {Array} range 
   * 
   * @returns {Boolean} 
   */
  checkRange(range){
    if (range.includes(this.ip))
      return true;
    return false;
  }

  /**
   * @method cidrCheck
   * @description cidr check that takes a range
   * 
   * @param {Object} identifier 
   * 
   * @returns {Array} 
   */
  cidrCheck(identifier){
    let cidr;

    let currentIP = identifier["setIP"].concat('/', identifier["mask"] );
    cidr = new IPCIDR(currentIP); 
    let ipRange = cidr.toArray();

    return ipRange;

  }

  /**
   * @method verifyCidr
   * @description verify req ip addressess in cidr array
   * 
   * @param {Array} campusAddress 
   * @param {Array} vpnaddress 
   * 
   * @returns {Boolean} 
   */
  async verifyCidr(campusAddress, vpnaddress) {
    await this.checkIp();
    for (let i of vpnaddress){
      let vpn_range = this.cidrCheck(i);
      if(this.checkRange(vpn_range))
        this.isVPN = true;
    }

    for (let i of campusAddress){
      let campus_range = this.cidrCheck(i);
      if(this.checkRange(campus_range))
        return this.ip;
    }
    return null;
  }


}

