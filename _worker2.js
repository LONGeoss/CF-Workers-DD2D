const _0x11366c=_0x1b81;(function(_0x1338ad,_0x90a430){const _0x2ba615=_0x1b81,_0x4604e5=_0x1338ad();while(!![]){try{const _0x3a7e41=parseInt(_0x2ba615(0x138))/0x1*(-parseInt(_0x2ba615(0x117))/0x2)+parseInt(_0x2ba615(0x13f))/0x3*(parseInt(_0x2ba615(0x10e))/0x4)+parseInt(_0x2ba615(0x152))/0x5*(parseInt(_0x2ba615(0x10c))/0x6)+parseInt(_0x2ba615(0x125))/0x7+-parseInt(_0x2ba615(0x122))/0x8+-parseInt(_0x2ba615(0x126))/0x9+parseInt(_0x2ba615(0xf7))/0xa;if(_0x3a7e41===_0x90a430)break;else _0x4604e5['push'](_0x4604e5['shift']());}catch(_0x754ce5){_0x4604e5['push'](_0x4604e5['shift']());}}}(_0x50f2,0xc26a9));let domains=[],IPv4=[],IPv6=[],banIP=[],ipAPI=[],dohURL=_0x11366c(0xe8),CF邮箱='',CF域名='',CF区域ID='',CFAPI令牌='',执行日志='',BotToken='',ChatID='',tgmsg='',解析成功次数=0x0,解析失败次数=0x0;export default{async 'fetch'(_0x556986,_0xd059cf,_0x4b0ea2){const _0x1023ca=_0x11366c;执行日志='';let _0x1f6f71='';try{if(_0xd059cf[_0x1023ca(0x148)])domains=await ADD(_0xd059cf[_0x1023ca(0x148)]);if(_0xd059cf['IPV4'])IPv4=await ADD(_0xd059cf[_0x1023ca(0xeb)]);if(_0xd059cf[_0x1023ca(0x146)])IPv6=await ADD(_0xd059cf['IPV6']);if(_0xd059cf['BANIP'])banIP=await ADD(_0xd059cf['BANIP']);if(_0xd059cf[_0x1023ca(0x133)])ipAPI=await ADD(_0xd059cf[_0x1023ca(0x133)]);dohURL=_0xd059cf['DOH']||dohURL,CF邮箱=_0xd059cf['CFMAIL']||CF邮箱,CF域名=_0xd059cf[_0x1023ca(0x114)]||CF域名,CF区域ID=_0xd059cf['CFZONEID']||CF区域ID,CFAPI令牌=_0xd059cf['CFKEY']||CFAPI令牌,BotToken=_0xd059cf[_0x1023ca(0x136)]||BotToken,ChatID=_0xd059cf[_0x1023ca(0x116)]||ChatID,log('变量加载完成');domains[_0x1023ca(0xe2)]+IPv4[_0x1023ca(0xe2)]+IPv6['length']+ipAPI[_0x1023ca(0xe2)]==0x0&&(domains=['cdn.xn--b6gac.eu.org'],log('DOMAIN、IPV4、IPV6、IPAPI变量值均为空，添加\x20演示解析域名\x20cdn.xn--b6gac.eu.org'));const _0x2db680=await updateIPArrays(domains);IPv4=IPv4[_0x1023ca(0xfe)](_0x2db680[0x0]),IPv6=IPv6[_0x1023ca(0xfe)](_0x2db680[0x1]),log(_0x1023ca(0x150));const _0x10d84a=await API2ip(ipAPI);IPv4=IPv4['concat'](_0x10d84a[0x0]),IPv6=IPv6[_0x1023ca(0xfe)](_0x10d84a[0x1]),log('API调用完成'),IPv4=[...new Set(IPv4)],IPv6=[...new Set(IPv6)],log(_0x1023ca(0x14f)),IPv4=IPv4[_0x1023ca(0xf2)](_0xad4564=>!banIP['includes'](_0xad4564)),IPv6=IPv6[_0x1023ca(0xf2)](_0x4756b3=>!banIP[_0x1023ca(0x11a)](_0x4756b3)),log(_0x1023ca(0x132));const _0x125e44=new URL(_0x556986[_0x1023ca(0x124)]);console[_0x1023ca(0x14e)](_0x125e44['pathname']);if(_0x125e44['pathname']==_0x1023ca(0x12f)){const _0x565662=_0x125e44['searchParams'][_0x1023ca(0x108)](_0x1023ca(0x134));if(_0xd059cf[_0x1023ca(0xfa)]&&_0xd059cf[_0x1023ca(0xfa)]!=_0x565662){if(!_0x565662)log('token不能为空');else log(_0x1023ca(0x100));_0x1f6f71=await 输出结果(0x0);}else log('手动执行'),_0x1f6f71=await 输出结果(0x1);}else _0x1f6f71=await 输出结果(0x0);}catch(_0x4ab6d0){log(_0x1023ca(0x10a)+_0x4ab6d0[_0x1023ca(0xe5)]),console[_0x1023ca(0xe7)](_0x4ab6d0),_0x1f6f71=await 输出结果(0x0);}return new Response(_0x1f6f71);},async 'scheduled'(_0x5c2082,_0x8e298f,_0x3483b4){const _0x238b7b=_0x11366c;console[_0x238b7b(0x14e)](_0x238b7b(0x140)+new Date()[_0x238b7b(0xe9)]());if(_0x8e298f[_0x238b7b(0x148)])domains=await ADD(_0x8e298f[_0x238b7b(0x148)]);if(_0x8e298f[_0x238b7b(0xeb)])IPv4=await ADD(_0x8e298f[_0x238b7b(0xeb)]);if(_0x8e298f[_0x238b7b(0x146)])IPv6=await ADD(_0x8e298f[_0x238b7b(0x146)]);if(_0x8e298f['BANIP'])banIP=await ADD(_0x8e298f['BANIP']);if(_0x8e298f[_0x238b7b(0x133)])ipAPI=await ADD(_0x8e298f[_0x238b7b(0x133)]);dohURL=_0x8e298f[_0x238b7b(0x139)]||dohURL,CF邮箱=_0x8e298f['CFMAIL']||CF邮箱,CF域名=_0x8e298f[_0x238b7b(0x114)]||CF域名,CF区域ID=_0x8e298f[_0x238b7b(0x13a)]||CF区域ID,CFAPI令牌=_0x8e298f['CFKEY']||CFAPI令牌,BotToken=_0x8e298f['TGTOKEN']||BotToken,ChatID=_0x8e298f['TGID']||ChatID,log(_0x238b7b(0x129));domains[_0x238b7b(0xe2)]+IPv4['length']+IPv6['length']+ipAPI[_0x238b7b(0xe2)]==0x0&&(domains=[_0x238b7b(0x127)],log(_0x238b7b(0xf1)));const _0x260201=await updateIPArrays(domains);IPv4=IPv4[_0x238b7b(0xfe)](_0x260201[0x0]),IPv6=IPv6[_0x238b7b(0xfe)](_0x260201[0x1]),log(_0x238b7b(0xea));const _0x77c0ba=await API2ip(ipAPI);IPv4=IPv4[_0x238b7b(0xfe)](_0x77c0ba[0x0]),IPv6=IPv6['concat'](_0x77c0ba[0x1]),log('Cron:\x20API调用完成'),IPv4=[...new Set(IPv4)],IPv6=[...new Set(IPv6)],log(_0x238b7b(0x10d)),IPv4=IPv4[_0x238b7b(0xf2)](_0x396508=>!banIP[_0x238b7b(0x11a)](_0x396508)),IPv6=IPv6[_0x238b7b(0xf2)](_0x1a17a4=>!banIP[_0x238b7b(0x11a)](_0x1a17a4)),log(_0x238b7b(0x13d)),await 输出结果(0x1),console[_0x238b7b(0x14e)](_0x238b7b(0xfc)+new Date()[_0x238b7b(0xe9)]());}};async function sendMessage(_0x2e6c6b){const _0x1de2fb=_0x11366c;if(BotToken!==''&&ChatID!==''){let _0x4619dc=_0x1de2fb(0x115)+BotToken+_0x1de2fb(0x131)+ChatID+_0x1de2fb(0xf5)+encodeURIComponent(_0x2e6c6b);return console[_0x1de2fb(0x14e)](_0x2e6c6b),log(_0x1de2fb(0x130)),fetch(_0x4619dc,{'method':_0x1de2fb(0x108),'headers':{'Accept':_0x1de2fb(0xef),'Accept-Encoding':_0x1de2fb(0xf3),'User-Agent':_0x1de2fb(0x11d)}});}else log(_0x1de2fb(0xdd));}function _0x1b81(_0x1b8343,_0x5c2d68){const _0x50f223=_0x50f2();return _0x1b81=function(_0x1b81ad,_0x589eab){_0x1b81ad=_0x1b81ad-0xd9;let _0x21832c=_0x50f223[_0x1b81ad];return _0x21832c;},_0x1b81(_0x1b8343,_0x5c2d68);}async function API2ip(_0x4c0d2f){const _0x58e9ef=_0x11366c;let _0x236b34=[],_0x560e03=[];if(!_0x4c0d2f||_0x4c0d2f[_0x58e9ef(0xe2)]===0x0)return[_0x236b34,_0x560e03];let _0x3ba415='';const _0x2c69ac=new AbortController(),_0x513c7f=setTimeout(()=>{const _0x1bcea1=_0x58e9ef;_0x2c69ac[_0x1bcea1(0x12c)]();},0x7d0);try{const _0x1b8ef0=await Promise['allSettled'](_0x4c0d2f['map'](_0x28a9fd=>fetch(_0x28a9fd,{'method':_0x58e9ef(0x108),'headers':{'Accept':'text/html,application/xhtml+xml,application/xml;','User-Agent':_0x58e9ef(0x137)},'signal':_0x2c69ac[_0x58e9ef(0x106)]})[_0x58e9ef(0x105)](_0x1c203c=>_0x1c203c['ok']?_0x1c203c[_0x58e9ef(0x112)]():Promise[_0x58e9ef(0x12a)]())));for(const _0x49f6f5 of _0x1b8ef0){if(_0x49f6f5[_0x58e9ef(0x149)]==='fulfilled'){const _0x14176d=await _0x49f6f5[_0x58e9ef(0xdb)];_0x3ba415+=_0x14176d+'\x0a';}}}catch(_0x1f474e){console['error'](_0x1f474e);}finally{clearTimeout(_0x513c7f);}const _0x513b42=await ADD(_0x3ba415),_0x1e12a7=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,_0x4e0b3f=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9]))$/;return _0x513b42[_0x58e9ef(0x121)](_0x5f1d89=>{const _0x1f8718=_0x58e9ef;if(_0x1e12a7[_0x1f8718(0x12b)](_0x5f1d89))_0x236b34['push'](_0x5f1d89),log('API获取\x20A记录'+_0x5f1d89);else _0x4e0b3f[_0x1f8718(0x12b)](_0x5f1d89)&&(_0x560e03[_0x1f8718(0x141)](_0x5f1d89),log(_0x1f8718(0x113)+_0x5f1d89));}),[_0x236b34,_0x560e03];}async function fetchDNSRecords(_0x445595,_0x29807d){const _0x311989=_0x11366c,_0x3aacdb=new URLSearchParams({'name':_0x445595,'type':_0x29807d}),_0x132ff6=dohURL+'?'+_0x3aacdb[_0x311989(0x118)](),_0x4a3804=await fetch(_0x132ff6,{'method':_0x311989(0x10f),'headers':{'Accept':'application/dns-json'}});if(!_0x4a3804['ok'])throw new Error(_0x311989(0x13b)+_0x4a3804['statusText']);const _0x34ef0c=await _0x4a3804[_0x311989(0xf8)]();return _0x34ef0c[_0x311989(0x103)]||[];}async function updateIPArrays(_0x24f8b3){const _0x1a7579=_0x11366c;let _0x1bc49b=[],_0x254822=[];for(const _0x55319a of _0x24f8b3){try{const _0x435091=await fetchDNSRecords(_0x55319a,'A');for(const _0x39f058 of _0x435091){_0x39f058[_0x1a7579(0x147)]===0x1&&(_0x1bc49b[_0x1a7579(0x141)](_0x39f058[_0x1a7579(0xdf)]),log(_0x1a7579(0xe4)+_0x55319a+_0x1a7579(0x14c)+_0x39f058['data']));}const _0x432dba=await fetchDNSRecords(_0x55319a,'AAAA');for(const _0x51a7b3 of _0x432dba){_0x51a7b3[_0x1a7579(0x147)]===0x1c&&(_0x254822[_0x1a7579(0x141)](_0x51a7b3[_0x1a7579(0xdf)]),log(_0x1a7579(0xe4)+_0x55319a+'\x20AAAA记录'+_0x51a7b3[_0x1a7579(0xdf)]));}}catch(_0x1a81a4){console['error'](_0x1a7579(0xe4)+_0x55319a+'\x20时出错:',_0x1a81a4);}}return[_0x1bc49b,_0x254822];}async function 输出结果(_0xf26751){const _0x180bd6=_0x11366c;解析成功次数=0x0,解析失败次数=0x0;let _0x2880eb='';IPv6['length']!=0x0&&(_0x2880eb=_0x180bd6(0xd9)+IPv6[_0x180bd6(0x13c)]('\x0a')+'\x0a');let _0x5f555b='';ipAPI[_0x180bd6(0xe2)]!=0x0&&(_0x5f555b=_0x180bd6(0x143)+ipAPI[_0x180bd6(0x13c)]('\x0a')+'\x0a');let _0x2ed5ff='';banIP[_0x180bd6(0xe2)]!=0x0&&(_0x2ed5ff=_0x180bd6(0x14a)+banIP[_0x180bd6(0x13c)]('\x0a')+'\x0a');let _0x908408='';domains[_0x180bd6(0xe2)]!=0x0&&(_0x908408=_0x180bd6(0xfb)+domains['join']('\x0a')+'\x0a');const _0x5b7f55=[...IPv4[_0x180bd6(0x11b)](_0x546b5b=>({'type':'A','content':_0x546b5b})),...IPv6[_0x180bd6(0x11b)](_0x269330=>({'type':_0x180bd6(0x13e),'content':_0x269330}))],_0x4421a1=CF域名+CF区域ID+CFAPI令牌+CF邮箱;let _0x56f5ba;if(_0x4421a1&&_0x4421a1!=''&&_0xf26751==0x1){_0x56f5ba=_0x180bd6(0xda)+CF域名+_0x180bd6(0xf4)+CF邮箱[_0x180bd6(0x142)](0x0,0x1)+_0x180bd6(0x120)+CF区域ID[_0x180bd6(0x142)](0x0,0x3)+'*************************'+CF区域ID[_0x180bd6(0x142)](CF区域ID[_0x180bd6(0xe2)]-0x4)+_0x180bd6(0x128)+CFAPI令牌['substring'](0x0,0x3)+_0x180bd6(0x109)+CFAPI令牌[_0x180bd6(0x142)](CFAPI令牌[_0x180bd6(0xe2)]-0x4);const _0x177fcc='https://api.cloudflare.com/client/v4/zones/'+CF区域ID+_0x180bd6(0x135)+CF域名,_0x55f17=await fetch(_0x177fcc,{'method':_0x180bd6(0x10f),'headers':{'X-Auth-Email':CF邮箱,'Authorization':_0x180bd6(0x11c)+CFAPI令牌,'Content-Type':_0x180bd6(0x102)}}),_0x18ba35=await _0x55f17[_0x180bd6(0xf8)]();console['log'](JSON[_0x180bd6(0xde)](_0x18ba35,null,0x2));let _0x152a27=[];if(!_0x18ba35[_0x180bd6(0x107)]||_0x18ba35[_0x180bd6(0xf6)][_0x180bd6(0xe2)]===0x0)log(CF域名+_0x180bd6(0xe3));else{for(let _0x298989 of _0x18ba35[_0x180bd6(0xf6)]){_0x152a27[_0x180bd6(0x141)](_0x298989['id']);}log(_0x180bd6(0x11f)+_0x152a27['join']('\x0a'));}await 批量删除域名(_0x152a27),await new Promise(_0x3afa7e=>setTimeout(_0x3afa7e,0x1f40)),await 批量添加解析(_0x5b7f55);}else _0xf26751==0x0?_0x56f5ba=_0x180bd6(0xda)+CF域名+_0x180bd6(0xf4)+CF邮箱[_0x180bd6(0x142)](0x0,0x1)+'******\x0a区域ID：'+CF区域ID[_0x180bd6(0x142)](0x0,0x3)+'*************************'+CF区域ID[_0x180bd6(0x142)](CF区域ID['length']-0x4)+_0x180bd6(0x128)+CFAPI令牌[_0x180bd6(0x142)](0x0,0x3)+'*************************'+CFAPI令牌[_0x180bd6(0x142)](CFAPI令牌[_0x180bd6(0xe2)]-0x4):_0x56f5ba=_0x180bd6(0xe1);const _0x61c4e2='Domains\x20DDNS\x20to\x20Domain\x0a################################################################\x0aCloudflare域名配置信息\x0a---------------------------------------------------------------\x0a'+_0x56f5ba+'\x0a\x0a---------------------------------------------------------------\x0a################################################################\x0a配置信息\x0a---------------------------------------------------------------\x0aDoH：\x0a'+dohURL+'\x0a'+_0x908408+_0x5f555b+_0x180bd6(0xe0)+IPv4[_0x180bd6(0x13c)]('\x0a')+'\x0a'+_0x2880eb+_0x2ed5ff+_0x180bd6(0x151)+执行日志+_0x180bd6(0x10b);if(_0xf26751==0x1)await sendMessage(_0x180bd6(0x14d)+CF域名+_0x180bd6(0x110)+解析成功次数+'\x20失败:\x20'+解析失败次数+tgmsg);return _0x61c4e2;}async function log(_0x208687){const _0x4bdaab=new Date(),_0x30adae=0x8*0x3c*0x3c*0x3e8,_0x3ecb41=new Date(_0x4bdaab['getTime']()+_0x30adae),_0x5a6507=formatDate(_0x3ecb41);执行日志+=_0x5a6507+'\x20'+_0x208687+'\x0a',console['log'](_0x208687);}function formatDate(_0x55fbbb){const _0x4c87c3=_0x11366c,_0x5c934a=_0x55fbbb[_0x4c87c3(0x123)](),_0xdab804=String(_0x55fbbb[_0x4c87c3(0x145)]()+0x1)[_0x4c87c3(0xdc)](0x2,'0'),_0x2060f8=String(_0x55fbbb[_0x4c87c3(0xff)]())[_0x4c87c3(0xdc)](0x2,'0'),_0x522668=String(_0x55fbbb[_0x4c87c3(0x11e)]())[_0x4c87c3(0xdc)](0x2,'0'),_0x10eb47=String(_0x55fbbb[_0x4c87c3(0x155)]())[_0x4c87c3(0xdc)](0x2,'0'),_0x4530a6=String(_0x55fbbb[_0x4c87c3(0xfd)]())[_0x4c87c3(0xdc)](0x2,'0');return _0x5c934a+'-'+_0xdab804+'-'+_0x2060f8+'\x20'+_0x522668+':'+_0x10eb47+':'+_0x4530a6;}async function ADD(_0x315614){const _0x55ff39=_0x11366c;var _0x5e099b=_0x315614['replace'](/[	 |"'\r\n]+/g,',')[_0x55ff39(0x14b)](/,+/g,',');if(_0x5e099b[_0x55ff39(0x12e)](0x0)==',')_0x5e099b=_0x5e099b[_0x55ff39(0x154)](0x1);if(_0x5e099b[_0x55ff39(0x12e)](_0x5e099b[_0x55ff39(0xe2)]-0x1)==',')_0x5e099b=_0x5e099b[_0x55ff39(0x154)](0x0,_0x5e099b[_0x55ff39(0xe2)]-0x1);const _0x1aab25=_0x5e099b['split'](',');return _0x1aab25;}async function 批量删除域名(_0x53aacd){const _0x1872e3=_0x11366c,_0xeb01ee=0x4,_0x4b6c25=0x7d0;for(let _0x49c70d=0x0;_0x49c70d<_0x53aacd[_0x1872e3(0xe2)];_0x49c70d+=_0xeb01ee){const _0x393970=_0x53aacd[_0x1872e3(0x154)](_0x49c70d,_0x49c70d+_0xeb01ee),_0x2a5450=_0x393970[_0x1872e3(0x11b)](_0x5d13a0=>删除域名(_0x5d13a0)),_0x3dfd33=await Promise[_0x1872e3(0xec)](_0x2a5450);_0x3dfd33['forEach']((_0x583cb4,_0x5000d5)=>{const _0x8901ab=_0x1872e3;_0x583cb4[_0x8901ab(0x149)]===_0x8901ab(0xe6)?log(CF域名+':'+_0x393970[_0x5000d5]+'\x20删除成功'):log(CF域名+':'+_0x393970[_0x5000d5]+_0x8901ab(0x12d)+_0x583cb4[_0x8901ab(0xf9)]);}),_0x49c70d+_0xeb01ee<_0x53aacd[_0x1872e3(0xe2)]&&await new Promise(_0x4b8462=>setTimeout(_0x4b8462,_0x4b6c25));}}function _0x50f2(){const _0xd3086a=['getHours','现有域名ID\x0a','******\x0a区域ID：','forEach','4950000tuosZt','getFullYear','url','5565868sNkpGC','10075401SIUnJc','cdn.xn--b6gac.eu.org','\x0aAPI令牌：','Cron:\x20变量加载完成','reject','test','abort','\x20删除失败:\x20','charAt','/go','TG推送完成','/sendMessage?chat_id=','BAN_IP清理完成','IPAPI','token','/dns_records?name=','TGTOKEN','cmliu/CF-Workers-DD2D','61956oljJim','DOH','CFZONEID','获取DNS记录失败:\x20','join','Cron:\x20BAN_IP清理完成','AAAA','3smuDem','Cron\x20job\x20started\x20at\x20','push','substring','\x0aIP_API：\x0a','/dns_records','getMonth','IPV6','type','DOMAIN','status','\x0aBAN_IP：\x0a','replace','\x20A记录','Domains\x20DDNS\x20to\x20Domain:\x0a','log','IP去重完成','域名解析完成','\x0a---------------------------------------------------------------\x0a################################################################\x0a执行日志\x0a---------------------------------------------------------------\x0a','7709920XvQduc','POST','slice','getMinutes','\x0aIPv6：\x0a','域名：','value','padStart','TG推送关闭','stringify','data','\x0a---------------------------------------------------------------\x0a################################################################\x0a整理结果\x0a---------------------------------------------------------------\x0aIPv4：\x0a','Cloudflare配置信息错误！','length','\x20域名解析为空，跳过删除域名流程','解析域名\x20','message','fulfilled','error','https://cloudflare-dns.com/dns-query','toUTCString','Cron:\x20域名解析完成','IPV4','allSettled','/dns_records/','all','text/html,application/xhtml+xml,application/xml;','content','DOMAIN、IPV4、IPV6、IPAPI变量值均为空，添加\x20演示解析域名\x20cdn.xn--b6gac.eu.org','filter','gzip,\x20deflate,\x20br','\x0a邮箱：','&parse_mode=HTML&text=','result','4975450gpNrdw','json','reason','TOKEN','\x0a解析域名：\x0a','Cron\x20job\x20completed\x20at\x20','getSeconds','concat','getDate','token不正确','\x20失败\x20','application/json','Answer','\x0a失败:\x20','then','signal','success','get','*************************','发生错误:\x20','\x0a\x0a---------------------------------------------------------------\x0a################################################################\x0atelegram\x20交流群\x20技术大佬~在线发牌!\x0ahttps://t.me/CMLiussss\x0a---------------------------------------------------------------\x0agithub\x20项目地址\x20Star!Star!Star!!!\x0ahttps://github.com/cmliu/CF-Workers-DD2D\x0a---------------------------------------------------------------\x0a################################################################','6eTheDL','Cron:\x20IP去重完成','38780bpXjLV','GET','\x20解析完成!\x20成功:\x20','记录:\x20','text','API获取\x20AAAA记录','CFDOMAIN','https://api.telegram.org/bot','TGID','10EFkHJg','toString','https://api.cloudflare.com/client/v4/zones/','includes','map','Bearer\x20','Mozilla/5.0\x20Chrome/90.0.4430.72'];_0x50f2=function(){return _0xd3086a;};return _0x50f2();}async function 删除域名(_0x2463e2){const _0x203989=_0x11366c,_0x285d64=_0x203989(0x119)+CF区域ID+_0x203989(0xed)+_0x2463e2,_0x500f41=await fetch(_0x285d64,{'method':'DELETE','headers':{'X-Auth-Email':CF邮箱,'Authorization':'Bearer\x20'+CFAPI令牌,'Content-Type':_0x203989(0x102)}}),_0x427e83=await _0x500f41[_0x203989(0xf8)]();console[_0x203989(0x14e)](JSON['stringify'](_0x427e83,null,0x2));if(!_0x427e83[_0x203989(0x107)])throw new Error('删除失败:\x20'+JSON[_0x203989(0xde)](_0x427e83['errors']));}async function 批量添加解析(_0x462e16){const _0x4416f6=_0x11366c,_0x2f1332=0x4,_0x5f571b=0x7d0;for(let _0x438388=0x0;_0x438388<_0x462e16[_0x4416f6(0xe2)];_0x438388+=_0x2f1332){const _0x50777a=_0x462e16[_0x4416f6(0x154)](_0x438388,_0x438388+_0x2f1332);await Promise[_0x4416f6(0xee)](_0x50777a[_0x4416f6(0x11b)](_0x1b08cd=>添加解析(_0x1b08cd[_0x4416f6(0x147)],_0x1b08cd[_0x4416f6(0xf0)]))),_0x438388+_0x2f1332<_0x462e16['length']&&await new Promise(_0x2affdb=>setTimeout(_0x2affdb,_0x5f571b));}}async function 添加解析(_0x1abf88,_0xa0a8af){const _0x448fe0=_0x11366c,_0x84a26=_0x448fe0(0x119)+CF区域ID+_0x448fe0(0x144);try{const _0x169bad=await fetch(_0x84a26,{'method':_0x448fe0(0x153),'headers':{'X-Auth-Email':CF邮箱,'Authorization':_0x448fe0(0x11c)+CFAPI令牌,'Content-Type':_0x448fe0(0x102)},'body':JSON[_0x448fe0(0xde)]({'type':_0x1abf88,'name':CF域名,'content':_0xa0a8af,'ttl':0x3c,'proxied':![]})}),_0x49b584=await _0x169bad[_0x448fe0(0xf8)]();console[_0x448fe0(0x14e)](JSON[_0x448fe0(0xde)](_0x49b584,null,0x2)),_0x49b584[_0x448fe0(0x107)]?(解析成功次数+=0x1,tgmsg+='\x0a'+_0x1abf88+_0x448fe0(0x111)+_0xa0a8af,log(CF域名+'\x20成功\x20'+_0x1abf88+_0x448fe0(0x111)+_0xa0a8af)):(解析失败次数+=0x1,tgmsg+=_0x448fe0(0x104)+_0xa0a8af,log(CF域名+_0x448fe0(0x101)+_0x1abf88+_0x448fe0(0x111)+_0xa0a8af));}catch(_0xbf2c76){解析失败次数+=0x1,tgmsg+='\x0a失败:\x20'+_0xa0a8af,log(CF域名+_0x448fe0(0x101)+_0x1abf88+_0x448fe0(0x111)+_0xa0a8af);}}