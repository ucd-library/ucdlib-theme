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
    this.ipCampusRange = ['128\.120\.*.*',
      '52\.79\.*.*',
      '169\.237\.*.*',
      '162\.251\.203\.(0[0-9]|[12][0-9]|3[0-1]|\d$)$', 
      '12\.235\.42\.(0[1-9]|[1-9][0-9]|1[01][0-9]|12[0-7]|\d$)$',
      '168\.150\.(\d\.|0[0-9]\.|[1-8][1-9]\.|9[01]\.).*',     
      '168\.150\.([0-8][1-9]\.|9[01]\.|9[6-9]\.|1[01][0-9]\.|12[0-7]\.|\d\.).*'
    ];
    this.ipResult ='';
    this.isVPN = false;
    this.runIP();
  }

async runIP(){
    this.ipResult = await this.checkIp();
}

async checkIp(){
    let ips;
    await fetch('https://api64.ipify.org?format=json', )
      .then(response => response.json())
      .then(data => {ips = data; });
    this.ip = ips["ip"];
    if (this.ip.includes(":")){
      this.isIP6 = true;
      return this.ip;
    } 
    this.isIP6 = false;
    return await this.isInRange(this.ip);

  }

isInRange(current_ip){
    for (let ip of this.ipCampusRange) {
      const regexCmd = new RegExp(ip, 'g');
      if (regexCmd.test(current_ip))
        return current_ip;
    }
    return null;
}

isInVPN(current_ip){
    for (let ip of this.ipVPNRange) {
      if (ip.contains(current_ip))
        this.isVPN = true;
    }
}


}



