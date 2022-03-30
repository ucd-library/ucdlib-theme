const IPCIDR = require("ip-cidr");


/**
 * @class IpDetect
 * @classdesc Utility for detecting type of IP and if it is in campus ip list and vpn ips
 */
export class IpDetect {
  constructor(){
    this.ip = '';
    this.isIP6 = false;
    this.ipVPNRange = ['128.120.234.0',
      '128.120.235.0',
      '128.120.236.0',
      '128.120.237.0',
      '128.120.238.0',
      '128.120.239.0',
      '128.120.251.0',
      '169.237.45.0'
    ];

    this.campusRange = [
      {"campusIP":"128.120.0.0", "mask":"16"},
      {"campusIP":"152.79.0.0", "mask":"16"},
      {"campusIP":"169.237.0.0", "mask":"16"},
      {"campusIP":"162.251.203.0", "mask":"27"},
      {"campusIP":"12.235.42.0", "mask":"25"},
      {"campusIP":"168.150.0.0", "mask":"17"},

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
    this.isResult = await this.verifyCidr(this.campusRange);
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
      this.isIP6 = true;
      await fetch('https://api.ipify.org?format=json', )
        .then(response => response.json())
        .then(data => {ips = data; });
      this.ip = ips["ip"];
    } 
    this.isIP6 = false;

  }


  /**
   * @method isInVPN
   * @description checks if ip address is in the vpn
   * 
   */
  isInVPN(){
    for (let ip of this.ipVPNRange) {
      if (ip == this.ip)
        this.isVPN = true;
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
  isInRange(range){
    if (range.includes(this.ip))
      return true;
    return false;
  }

  /**
   * @method verifyCidr
   * @description verify req ip addressess in cidr array
   * 
   * @param {String|Array} address 
   * 
   * @returns {Boolean} 
   */
  async verifyCidr(address) {
    let cidr;
    await this.checkIp();
    this.isInVPN();
    for (let i of address){
      let currentIP = i["campusIP"].concat('/', i["mask"] );
      cidr = new IPCIDR(currentIP); 
      let campusRange = cidr.toArray();
      if(this.isInRange(campusRange))
        return this.ip;
    }
    return null;
  }


}

