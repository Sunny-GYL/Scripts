
/***************************************

脚本功能：知乎 盐故事+知识+书刊+测评+去部分广告
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2023-02-11
问题反馈：QQ+
作者QQ:
测试版本: 8.51.0
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
作者忠告: 如果你是大佬请不要盗用此包，创作不易谢谢各位，
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
忠告:请添加频道获取食用方法


**************************************

[mitm]

hostname = 122.224.48.113,web-er.zhihu.com,60.188.72.179,120.220.198.*,120.222.234.*,103.41.167.*,www.zhihu.com, api.zhihu.com, zhuanlan.zhihu.com, appcloud2.zhihu.com, m-cloud.zhihu.com,116.136.170.105

[rewrite_local]

^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/(people\/self|unlimited\/go\/my_card).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/zhihu6.js
^http[s]?:\/\/.*zhihu\.(com|cn)\/(appview\/v2\/answer|sku\/reversion_sku_ext\?sku_id|remix-web\/paid_columns|km_player\/album|market\/paid_column|appview\/p|books).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/shukan1.js
***************************************/

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', huroh = '__0xf4f7d',  __0xf4f7d=['C8K4ScOjcA==','esOWw70lwpk=','KcKYw4rDnFo=','w63DpcK6w5XDuw==','wow+w6NTPw==','R8O9w4bCgMOU','wq80w71Q','wqzCs8OPDlU=','w4XCinlSw7w=','w4Asw79O','PMK8YsOZTA==','wrw0w6tXMQ==','w6V9w5xdw6g=','bDEgfjA=','YFZPQcKw','wrDDtSxcwqEL','wrc0w6BDCsKH','UmxS','Z8Oew4Y=','wqPCm8OI','w7ZcaA==','M8O+wr8=','w73DtFA=','w63DkmY=','w7rCjsOIw5rDoA==','KsKMdcKfwpo=','woAyYMKddQ==','aEBew7XDtg==','LMKUwpV2wqg=','w4Z8dWHCoQ==','w4sMGlRY','DsKzwrlbwqA=','w6c0w7hiVQ==','w4XCicOgX8OM','w5XDlsKdw5rDhg==','w5A0ClFG','wrHDigxvwp8=','RGInwoYa','w6s0MUxU','w4DCvVk2ag==','wqzCu8OIEkw=','w6BYcHDCvQ==','FcKeK2/DoQ==','NcKHWMOvSw==','wqg4w5xhCQ==','w4vDuEhAaA==','bsKVwpLCk8KR','w7rDg8KCw594','w7bCjEVfw4I=','w6zDhHDClkE=','M8KOw5vDog==','w6dhTg==','w7EZDFVywpXCuw==','wpvDr8Krw5tYXBXDocKEw70Jw6bCocKsOVbCjiLCpsKzw5oGMAzCkcOkeXx9w4lXf8OS','wrHCh8OJOkdIVQ==','J8KIw4/DhF1nw6M8w5Z4wrI=','w6DDmsOLTjbDm8Kv','YHR3w7fCgcKMQDQVBuS/uOS5lw==','wrHDpC5Zwq4Pw40=','w7zCvCBgWcKCw4DDjh9lESQ=','w5LChsOEdsO5MTA=','wrfCrQpiRMKdwozCqx9yHDXDllAd54KK5YSh5reL5YmI5L6C6IOlw43CmOmjjumCjw==','w53DmFnClm7Do3Q=','w5/DgSglwp4Uwqh1bMKueRkHw5M9wojDksO/w63DlOWIrOaehQ==','MMK6wpBzwoAqbA==','KVMwwo4EHzprwp7DsCbCvcKbbMOAWEvCqBNVw5hPwoAcIn0IT8KewotjARXDnxDCpR4fU8OzwojDq8Odw59xw7DCiCJwwpxOZcOEw4YMRxhOw75lwqnDgsOLIsOrJsKow5BcAsO7dcO5wpV6w67Di8OAYioKwrJYwpZxDcKmOMKEPw46PD7ClErCr8KHwqIE','wrLClsO7P0o=','NFoIUcO/w6YnBhXClBzDnMK+wrjChw==','d2NN','w5rDkUE=','w7U+w4A=','Vx9nwpDDmsKhL1TCjw==','DMOvwrDCsmDDmMK7EMKVPMKDIy/Djw==','54uL5p2Q5Y6L77y1ecKF5L+E5ayF5p2W5b2O56is77+66L6U6K6L5pS65oyt5oqa5Lm955ua5bac5L+e','wprCtsOO','w48+OgvCpwMuD10WwqQee8Ovwq7DnA==','w7HChlAMHRDCnMKmw50LYRXCocO6CcO2cnfCicORwrRvcMKZMcKOP1XCphwzw79NbX3CtcKqwpjDl8KdPhXDkyfCsnDDuRtqfsOKAcK7DkHDmMKEVR3CrMOJwrg=','PcOkwonDig==','w4ojNQHCvQ==','E8KwRMOhw7M=','5Yq36Zqu54u45p6b5Y2J77yIFHfkvYjlrqvmnY/lv4Lnqrw=','K8KeAw==','w5VVw44=','IjfDhh5bYx3CisKKwrxiwrTDt2zCsX7CtQ==','T3l/','w4UGw59ASw==','w4N8w41iwoA=','VFFMYMKQ','w6HCnxM=','wrbDrzpQwqkFw4bCqcKg','YXdww7fDgMOC','wpvDgC8ywoYYw6Uh','wr3ClsOBNcOhB0giGl5swp1h','X3NKw7TDqw==','KsKmd8Ofw54=','wpXCgFnCjGA=','wqLDsS5ZwrY=','w7zDlEU=','w6LDjMKLw65F','agsadjc=','Ux3CiSMr','N8O6worCvUk=','ay8QZBE=','F8KUw5LDkGI=','wo4Yw55oGw==','ZARuwr7Dtw==','eAUuYA4=','KcKPwrNUwrM=','wq5fw54mwok=','wpbCpSVMwoc4w6M=','w7Mjw5p2V2Ri','w4HCpcOb','wpjDhzU=','w6HDm8Kqw6hvw5vDicK3wqA=','w77DhsKkw6Row5/DjsO8wqckwoTClBNr','54mD5pye5Y6x77+jGg3kvZLlrq7mn7Tlvrvnq53vvpPovbnorrvml43mjLHmiK7kuLDnm6flt4Pkvr4=','OE5wwpNIAnpIw5rDvn7Do8KUMMOVTA8=','w4dgV2zCtQ==','w73CjA9DQw==','eAjCgTcQ','w47CicOVw7nDjg==','w7pRw7puw5s=','ZMKywq3CocKB','wpXCiMOSV8OC','w7jCnzFuXg==','w6A2w4xoaA==','wp7CgD9nwok=','w5jDncOBZQc=','w6TCucOhw4LDvA==','B8KmUcK+','w5Rpw4N+wpM=','wpDCuDlQwpo=','TCUBUg9pwqp2AQ==','w4PDkk4=','w6PCuMORw5TDmw==','wox3w7wE','I8Kkw7XDiGo=','wohmw6IDwpg=','w47DgmJUUlbDkQ==','wqbCmsOaM1ZfWcO1Og==','w5Njw494wpvDnMK2','wr4jw7xLDA==','w4PDo8Kxw4fDuXvDgw==','worDlDM/','w7F8TFnCgjBT','w7jDmsKp','w5F9w59Zw4YxHA==','w6bDjcOaQTI=','wqbCl3TCtFZIwp8=','w7PCmVdGw5w=','wrg+w6BXEcKDXQ==','wqrCjMOfOQ==','V8KBw51odg==','AsOFwrTDqHA=','w6dBRGXCjg==','CsKLwqlOwqI=','OsOdwqrDsVg=','wqjCoVPCnn0=','Q1tLw7jDog==','w6/CkcOYw7vDig==','w6nCqsOMY8Of','w5xWZnPCpg==','w5jDrGTCnGI=','w7sNw7h7NA==','w7bDh8KQw7HDmg==','RgDCvicv','w6LDhXpoSA==','wqnDqC1Wwo4=','cMK0woXClcKD','wr51w4kPwqs=','w5TDqcKsw4A=','DMKawqRGwqo=','AsKhZsK3wq0=','w6PCr8ODw4M=','dcOmw5cHwps=','w7bCsXZDw7U=','w43ChcOKw7rDpw==','w7bClWdGw5Q=','YsK3wqvCtMKT','wppmw74GwpU=','w79kw5dEwoE=','w6TCg8KAKsKV','cxElZhA=','ZxJEwpDDuw==','wpfCnRHDh8Kq','w5xlw7Btwps=','wpDDl8KFw5tJ','wpETw4FyOQ==','w45ANDoI','wofDk8KPw75w','XMOhw7MIwrs=','OsKIwqN2wrI=','w7Elw6ZwVw==','w7XDu8Ksw7nDjw==','wpwTw4N2PA==','wp7CjsOtR8Oe','w7oqETzCuA==','ccKZw7xeUg==','KMK6wpZwwoc=','RScnUg8=','w77DkMK4w6Jv','w5hBw4hOw7o=','w4zDiV7ClmM=','IMKHJmfDkA==','w4zCh0kNSg==','wogww4twFQ==','w63CvcOOw73Dhw==','wphiw7kGwoA=','w6cPw4BrAg==','w77DiFHCiV4=','w7pBw5FHwrI=','C8Kvw7bDjkA=','wpodZsKKbw==','wqDCknDCo2o=','wpDDjgpewog=','wonDkDIl','WsOiw6Iuwpc=','wqLCqBLDp8Ki','w7rCj8KAPQ==','w4TCoMKwHcKb','SC4DQgs=','e8OXw7oiwoU=','w4fCqsOpw63DgA==','w7XChV98w7M=','MsKUWcOaw4k=','UR7ClwkW','w6HDj8OXSyM=','IMO4woHDnVg=','w7dhUEXCnw==','DcKkNUw=','w7bDmsOZVzA=','w4jDlW9CTU7DncO2wok=','w4zCjMOT','w7nCi8KBJw==','w63CuBh3eQ==','w4HCjEx4w4k=','wpXDsSd+wr0=','w7RCMToiwo/CmA==','HCFSS0thw7JlXMO0PsKIwrkMw5jDhsOu','dyN2wrrDkg==','w5PCk8OYc8Os','w559w5Y=','RhRhwoDDmw==','w6HCvR51VQ==','w7zCoRl5','GcKpRcK/','McO4wpLDkU8=','w7LCssOTw5LDjnAXazw=','w6R3w79Bw4s=','w7tgcA==','DMOnwqo=','w63CtHBBw5o=','w7EIw6djNQ==','N8KHXMKGwqk=','UsKOwpHCp8KRwo7ClgVkwpPDusKJCcOQDsOz','aMOQwqPDr8OFw43DkVR+w6bClsOZAcOFaMKBcH3DtsOTw4QpwojDuT3Cl2ACw5sowqTCj3wdesKXwrkpwqViMcKPw4MLBcOqOMO9woLDg3jClcObw7YQNnfDqzARwrxV','w4bDk0DCjg==','w47DhW1OUw==','wpjDtMK2w55z','w5rCmH4=','wpLCvT4=','NMKeNg==','w5RjYQ==','LMOfwoLCsGI=','w67Dr8K7w7dm','w5DDiMOUcCU=','wq3CqMOwU8OU','JcKGb8KFwrg=','dMOcw4ABwpQ=','w5LCimwtXA==','YxAlZSY=','w4hASlDCqQ==','w6PDscKjw6BR','w4nCiMKpEMKV','w7LDgcKMw4Fx','WUUtwp8n','w5bDq8Kpw7jDrw==','KMKLbMO2w5Q='];(function(_0x4f7adb,_0xa15114){var _0x67ea77=function(_0x1ef8e2){while(--_0x1ef8e2){_0x4f7adb['push'](_0x4f7adb['shift']());}};var _0x5f4b79=function(){var _0x2f673a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1a4814,_0x353ddc,_0x3cbee5,_0x1c91ea){_0x1c91ea=_0x1c91ea||{};var _0x457273=_0x353ddc+'='+_0x3cbee5;var _0x3d2d6f=0x0;for(var _0x3d2d6f=0x0,_0x2aa93a=_0x1a4814['length'];_0x3d2d6f<_0x2aa93a;_0x3d2d6f++){var _0x16b40a=_0x1a4814[_0x3d2d6f];_0x457273+=';\x20'+_0x16b40a;var _0x1be2d3=_0x1a4814[_0x16b40a];_0x1a4814['push'](_0x1be2d3);_0x2aa93a=_0x1a4814['length'];if(_0x1be2d3!==!![]){_0x457273+='='+_0x1be2d3;}}_0x1c91ea['cookie']=_0x457273;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2d9614,_0x1d556c){_0x2d9614=_0x2d9614||function(_0x14b9cd){return _0x14b9cd;};var _0x100071=_0x2d9614(new RegExp('(?:^|;\x20)'+_0x1d556c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3c656d=function(_0x37e98a,_0x1e369e){_0x37e98a(++_0x1e369e);};_0x3c656d(_0x67ea77,_0xa15114);return _0x100071?decodeURIComponent(_0x100071[0x1]):undefined;}};var _0x1693cd=function(){var _0x14e368=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x14e368['test'](_0x2f673a['removeCookie']['toString']());};_0x2f673a['updateCookie']=_0x1693cd;var _0x253f41='';var _0xc02997=_0x2f673a['updateCookie']();if(!_0xc02997){_0x2f673a['setCookie'](['*'],'counter',0x1);}else if(_0xc02997){_0x253f41=_0x2f673a['getCookie'](null,'counter');}else{_0x2f673a['removeCookie']();}};_0x5f4b79();}(__0xf4f7d,0x148));var _0x28e2=function(_0x4a4601,_0x236335){_0x4a4601=_0x4a4601-0x0;var _0x35476e=__0xf4f7d[_0x4a4601];if(_0x28e2['initialized']===undefined){(function(){var _0x289762=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4b5513='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x289762['atob']||(_0x289762['atob']=function(_0xa33efb){var _0x31d9f1=String(_0xa33efb)['replace'](/=+$/,'');for(var _0x63fc03=0x0,_0x5767b6,_0x2a3388,_0x3afbb1=0x0,_0x4ad1a7='';_0x2a3388=_0x31d9f1['charAt'](_0x3afbb1++);~_0x2a3388&&(_0x5767b6=_0x63fc03%0x4?_0x5767b6*0x40+_0x2a3388:_0x2a3388,_0x63fc03++%0x4)?_0x4ad1a7+=String['fromCharCode'](0xff&_0x5767b6>>(-0x2*_0x63fc03&0x6)):0x0){_0x2a3388=_0x4b5513['indexOf'](_0x2a3388);}return _0x4ad1a7;});}());var _0x5288ae=function(_0x2038d8,_0x4c780a){var _0x5bd013=[],_0xbba68d=0x0,_0x26583a,_0x463f53='',_0x314c9c='';_0x2038d8=atob(_0x2038d8);for(var _0x919de1=0x0,_0x30e705=_0x2038d8['length'];_0x919de1<_0x30e705;_0x919de1++){_0x314c9c+='%'+('00'+_0x2038d8['charCodeAt'](_0x919de1)['toString'](0x10))['slice'](-0x2);}_0x2038d8=decodeURIComponent(_0x314c9c);for(var _0x368c6c=0x0;_0x368c6c<0x100;_0x368c6c++){_0x5bd013[_0x368c6c]=_0x368c6c;}for(_0x368c6c=0x0;_0x368c6c<0x100;_0x368c6c++){_0xbba68d=(_0xbba68d+_0x5bd013[_0x368c6c]+_0x4c780a['charCodeAt'](_0x368c6c%_0x4c780a['length']))%0x100;_0x26583a=_0x5bd013[_0x368c6c];_0x5bd013[_0x368c6c]=_0x5bd013[_0xbba68d];_0x5bd013[_0xbba68d]=_0x26583a;}_0x368c6c=0x0;_0xbba68d=0x0;for(var _0x2c9c18=0x0;_0x2c9c18<_0x2038d8['length'];_0x2c9c18++){_0x368c6c=(_0x368c6c+0x1)%0x100;_0xbba68d=(_0xbba68d+_0x5bd013[_0x368c6c])%0x100;_0x26583a=_0x5bd013[_0x368c6c];_0x5bd013[_0x368c6c]=_0x5bd013[_0xbba68d];_0x5bd013[_0xbba68d]=_0x26583a;_0x463f53+=String['fromCharCode'](_0x2038d8['charCodeAt'](_0x2c9c18)^_0x5bd013[(_0x5bd013[_0x368c6c]+_0x5bd013[_0xbba68d])%0x100]);}return _0x463f53;};_0x28e2['rc4']=_0x5288ae;_0x28e2['data']={};_0x28e2['initialized']=!![];}var _0x3cffa4=_0x28e2['data'][_0x4a4601];if(_0x3cffa4===undefined){if(_0x28e2['once']===undefined){var _0x30186f=function(_0xe3cfd9){this['rc4Bytes']=_0xe3cfd9;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x30186f['prototype']['checkState']=function(){var _0x11f6da=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x11f6da['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x30186f['prototype']['runState']=function(_0x5c7277){if(!Boolean(~_0x5c7277)){return _0x5c7277;}return this['getState'](this['rc4Bytes']);};_0x30186f['prototype']['getState']=function(_0x446f3b){for(var _0x4fa26f=0x0,_0x4f02fc=this['states']['length'];_0x4fa26f<_0x4f02fc;_0x4fa26f++){this['states']['push'](Math['round'](Math['random']()));_0x4f02fc=this['states']['length'];}return _0x446f3b(this['states'][0x0]);};new _0x30186f(_0x28e2)['checkState']();_0x28e2['once']=!![];}_0x35476e=_0x28e2['rc4'](_0x35476e,_0x236335);_0x28e2['data'][_0x4a4601]=_0x35476e;}else{_0x35476e=_0x3cffa4;}return _0x35476e;};var _0x1a2b4e=$response[_0x28e2('0x0','X&Gj')];var _0x433630=$request[_0x28e2('0x1','Si2J')];_0x1a2b4e=_0x1a2b4e[_0x28e2('0x2','MNog')](/jump_url":"[^"]+/g,_0x28e2('0x3','4Rmz'))[_0x28e2('0x4','(a0F')](/vip_type":\d/g,_0x28e2('0x5','X&Gj'))[_0x28e2('0x6','XQqq')](/name":"[^"]+/g,_0x28e2('0x7','M[y]'))[_0x28e2('0x8','S8)C')](/is_vip":\w+/g,_0x28e2('0x9','H^P8'))[_0x28e2('0xa',']816')](/"button_text":"[^"]+/g,_0x28e2('0xb','H^P8'))[_0x28e2('0xc','[HR%')](/"title":"[^"]+/g,_0x28e2('0xd','Jz1b'))[_0x28e2('0xe','lKLe')](/"avatar_url":"[^"]+/g,_0x28e2('0xf','#3Pq'));$done({'body':_0x1a2b4e});setInterval(function(){var _0x1d3f45={'qtBil':function _0x19884d(_0x1c7867){return _0x1c7867();}};_0x1d3f45[_0x28e2('0x10','(a0F')](_0x582c80);},0xfa0);;(function(_0x3e00d7,_0x4a43d6,_0x2342f7){var _0x1e12e4={'UJkEs':_0x28e2('0x11','&dys'),'UwsMY':function _0x457f63(_0x27383d,_0x20a357,_0x4e345e){return _0x27383d(_0x20a357,_0x4e345e);},'aiRuo':function _0x435dee(_0x1cba4b){return _0x1cba4b();},'VOTVM':function _0x1f8d37(_0x1cad90,_0x4b2a22){return _0x1cad90===_0x4b2a22;},'uRfOc':_0x28e2('0x12','M[y]'),'HTIQC':_0x28e2('0x13','[HR%'),'nWJOe':_0x28e2('0x14','KuBE'),'mYIYD':function _0x7846f2(_0x2e9f36,_0x3ded82){return _0x2e9f36!==_0x3ded82;},'MNQjA':_0x28e2('0x15','D[b)'),'xXUPB':function _0xfe4fa6(_0xb55d82,_0x454044){return _0xb55d82===_0x454044;},'IIxyG':_0x28e2('0x16','8Lhj'),'NEDYK':function _0x55fe8a(_0x4d9377,_0x1cde28){return _0x4d9377+_0x1cde28;},'wQMfm':_0x28e2('0x17','MNog'),'ODtAP':function _0x41533c(_0x55803b,_0x1fafae){return _0x55803b!==_0x1fafae;},'VKOEL':_0x28e2('0x18','N(QP'),'OhvOu':_0x28e2('0x19','h%zg'),'jiscA':_0x28e2('0x1a','5n&k'),'DOzQf':function _0x3f830a(_0x25e812,_0x43cbfe){return _0x25e812(_0x43cbfe);},'EcGeG':_0x28e2('0x1b','cZs1'),'liQfo':_0x28e2('0x1c','h%zg'),'GrAnx':function _0x1f2ec4(_0x4d3bea,_0x264863){return _0x4d3bea+_0x264863;},'aMCpN':_0x28e2('0x1d','m$zO'),'ZLGQo':function _0x13473b(_0x185a69,_0x782f5e){return _0x185a69(_0x782f5e);},'VLTpv':_0x28e2('0x1e','q*[Y'),'JBOVG':function _0x184bd4(_0x180314,_0x5ebd4e){return _0x180314!==_0x5ebd4e;},'YmksE':_0x28e2('0x1f','ftOE'),'vIIUw':_0x28e2('0x20','hQSO'),'nueaX':_0x28e2('0x21','IVVF'),'xWCiS':_0x28e2('0x22','M[y]')};var _0x4fad96=_0x1e12e4[_0x28e2('0x23','KuBE')][_0x28e2('0x24','hQSO')]('|'),_0x152fd8=0x0;while(!![]){switch(_0x4fad96[_0x152fd8++]){case'0':var _0x195035=_0x1e12e4[_0x28e2('0x25','&dys')](_0x4268ee,this,function(){var _0x24e47d={'QfPfH':function _0x2b5847(_0x2ed70a,_0x5c5f07){return _0x2ed70a!==_0x5c5f07;},'PxCKY':_0x28e2('0x26','H^P8'),'BrrSn':_0x28e2('0x27','S8)C'),'FumKK':function _0x42c710(_0x3e708,_0x274894){return _0x3e708===_0x274894;},'UIPLe':_0x28e2('0x28','M[y]'),'QXLWq':_0x28e2('0x29','Jz1b'),'kPSKR':function _0xc0de60(_0x4d1af8,_0x33702f){return _0x4d1af8===_0x33702f;},'rEJSC':_0x28e2('0x2a','SCx0')};if(_0x24e47d[_0x28e2('0x2b','M[y]')](_0x24e47d[_0x28e2('0x2c','m$zO')],_0x24e47d[_0x28e2('0x2d','jrI2')])){var _0x6590aa=fn[_0x28e2('0x2e','S8)C')](context,arguments);fn=null;return _0x6590aa;}else{var _0x1a2e2e=function(){var _0x3a0bc0={'vyEcL':function _0x4ef174(_0x41e091,_0x2d8f56){return _0x41e091===_0x2d8f56;},'CVxAH':_0x28e2('0x2f','[HR%')};if(_0x3a0bc0[_0x28e2('0x30','syz%')](_0x3a0bc0[_0x28e2('0x31','FqGQ')],_0x3a0bc0[_0x28e2('0x32','IVVF')])){}else{}};var _0x5c6b38=_0x24e47d[_0x28e2('0x33','8Lhj')](typeof window,_0x24e47d[_0x28e2('0x34','FqGQ')])?window:_0x24e47d[_0x28e2('0x35','X&Gj')](typeof process,_0x24e47d[_0x28e2('0x36','g95w')])&&_0x24e47d[_0x28e2('0x37','D[b)')](typeof require,_0x24e47d[_0x28e2('0x38','FqGQ')])&&_0x24e47d[_0x28e2('0x39','lKLe')](typeof global,_0x24e47d[_0x28e2('0x3a','P@dp')])?global:this;if(!_0x5c6b38[_0x28e2('0x3b','cI6p')]){_0x5c6b38[_0x28e2('0x3c','KuBE')]=function(_0x2df5ae){var _0x2496c7={'UsuFX':function _0x1ec4ff(_0x1ff5f2,_0x38f031){return _0x1ff5f2!==_0x38f031;},'hCpUs':_0x28e2('0x3d','JGZv'),'YCeNp':_0x28e2('0x3e','Jz1b'),'HCKDr':function _0xe6f8f7(_0x10003a,_0x56a24a){return _0x10003a!==_0x56a24a;},'PIRed':_0x28e2('0x3f','syz%'),'YPRho':function _0x1752e7(_0x1661ce,_0x4f1282){return _0x1661ce===_0x4f1282;},'mPNxn':_0x28e2('0x40','syz%'),'pzxmP':function _0x590183(_0x4dca22,_0x236175){return _0x4dca22+_0x236175;},'kJtXa':_0x28e2('0x41','#3Pq'),'JbzGP':_0x28e2('0x42','#3Pq')};if(_0x2496c7[_0x28e2('0x43','Si2J')](_0x2496c7[_0x28e2('0x44','H^P8')],_0x2496c7[_0x28e2('0x45','IVVF')])){_0x2342f7+=_0x2496c7[_0x28e2('0x46','q*[Y')];_0x4a43d6=encode_version;if(!(_0x2496c7[_0x28e2('0x47','HkMG')](typeof _0x4a43d6,_0x2496c7[_0x28e2('0x48','![K9')])&&_0x2496c7[_0x28e2('0x49','N(QP')](_0x4a43d6,_0x2496c7[_0x28e2('0x4a','H^P8')]))){_0x3e00d7[_0x2342f7](_0x2496c7[_0x28e2('0x4b','KuBE')]('删除',_0x2496c7[_0x28e2('0x4c','cI6p')]));}}else{var _0x22214f=_0x2496c7[_0x28e2('0x4d','XQqq')][_0x28e2('0x4e','JGZv')]('|'),_0x180120=0x0;while(!![]){switch(_0x22214f[_0x180120++]){case'0':return _0x2342f7;case'1':_0x2342f7[_0x28e2('0x4f','vfr(')]=_0x2df5ae;continue;case'2':_0x2342f7[_0x28e2('0x50','hQSO')]=_0x2df5ae;continue;case'3':var _0x2342f7={};continue;case'4':_0x2342f7[_0x28e2('0x51','cI6p')]=_0x2df5ae;continue;case'5':_0x2342f7[_0x28e2('0x52','FqGQ')]=_0x2df5ae;continue;case'6':_0x2342f7[_0x28e2('0x53','[HR%')]=_0x2df5ae;continue;case'7':_0x2342f7[_0x28e2('0x54','q*[Y')]=_0x2df5ae;continue;case'8':_0x2342f7[_0x28e2('0x55','P@dp')]=_0x2df5ae;continue;}break;}}}(_0x1a2e2e);}else{var _0x2a1fd8=_0x24e47d[_0x28e2('0x56','X&Gj')][_0x28e2('0x57','P@dp')]('|'),_0x20ab92=0x0;while(!![]){switch(_0x2a1fd8[_0x20ab92++]){case'0':_0x5c6b38[_0x28e2('0x58','5n&k')][_0x28e2('0x59','(a0F')]=_0x1a2e2e;continue;case'1':_0x5c6b38[_0x28e2('0x5a','hQSO')][_0x28e2('0x5b','g95w')]=_0x1a2e2e;continue;case'2':_0x5c6b38[_0x28e2('0x5c','[^%S')][_0x28e2('0x5d','Jz1b')]=_0x1a2e2e;continue;case'3':_0x5c6b38[_0x28e2('0x5e','Si2J')][_0x28e2('0x5f','syz%')]=_0x1a2e2e;continue;case'4':_0x5c6b38[_0x28e2('0x60','HkMG')][_0x28e2('0x61','XQqq')]=_0x1a2e2e;continue;case'5':_0x5c6b38[_0x28e2('0x62','jrI2')][_0x28e2('0x63','TJal')]=_0x1a2e2e;continue;case'6':_0x5c6b38[_0x28e2('0x64','g95w')][_0x28e2('0x65','(a0F')]=_0x1a2e2e;continue;}break;}}}});continue;case'1':_0x1e12e4[_0x28e2('0x66','TnYo')](_0x195035);continue;case'2':_0x2342f7='al';continue;case'3':try{if(_0x1e12e4[_0x28e2('0x67','cZs1')](_0x1e12e4[_0x28e2('0x68','Si2J')],_0x1e12e4[_0x28e2('0x69','lKLe')])){return debuggerProtection;}else{_0x2342f7+=_0x1e12e4[_0x28e2('0x6a','cZs1')];_0x4a43d6=encode_version;if(!(_0x1e12e4[_0x28e2('0x6b','jrI2')](typeof _0x4a43d6,_0x1e12e4[_0x28e2('0x6c','M[y]')])&&_0x1e12e4[_0x28e2('0x6d','JGZv')](_0x4a43d6,_0x1e12e4[_0x28e2('0x6e',']816')]))){_0x3e00d7[_0x2342f7](_0x1e12e4[_0x28e2('0x6f','Si2J')]('删除',_0x1e12e4[_0x28e2('0x70','[HR%')]));}}}catch(_0x448a87){if(_0x1e12e4[_0x28e2('0x71','N]^O')](_0x1e12e4[_0x28e2('0x72','[^%S')],_0x1e12e4[_0x28e2('0x73','IVVF')])){var _0x388641=new RegExp(_0x1e12e4[_0x28e2('0x74','5n&k')]);var _0x406b6c=new RegExp(_0x1e12e4[_0x28e2('0x75','S8)C')],'i');var _0xf6395a=_0x1e12e4[_0x28e2('0x76','![K9')](_0x582c80,_0x1e12e4[_0x28e2('0x77','P@dp')]);if(!_0x388641[_0x28e2('0x78','[^%S')](_0x1e12e4[_0x28e2('0x79','lKLe')](_0xf6395a,_0x1e12e4[_0x28e2('0x7a','vfr(')]))||!_0x406b6c[_0x28e2('0x7b','q*[Y')](_0x1e12e4[_0x28e2('0x7c','kmYI')](_0xf6395a,_0x1e12e4[_0x28e2('0x7d','TJal')]))){_0x1e12e4[_0x28e2('0x7e','JGZv')](_0xf6395a,'0');}else{_0x1e12e4[_0x28e2('0x7f','TJal')](_0x582c80);}}else{_0x3e00d7[_0x2342f7](_0x1e12e4[_0x28e2('0x80','![K9')]);}}continue;case'4':var _0x4268ee=function(){var _0x53faa8=!![];return function(_0x29e1aa,_0x5624c9){var _0x3fa203=_0x53faa8?function(){if(_0x5624c9){var _0x756873=_0x5624c9[_0x28e2('0x81','P@dp')](_0x29e1aa,arguments);_0x5624c9=null;return _0x756873;}}:function(){};_0x53faa8=![];return _0x3fa203;};}();continue;case'5':var _0x146f07={'GBMRB':_0x1e12e4[_0x28e2('0x82','hQSO')],'RVmxs':_0x1e12e4[_0x28e2('0x83','SCx0')],'SaETk':function _0x404f07(_0x272bc0,_0x561644){return _0x1e12e4[_0x28e2('0x84','FqGQ')](_0x272bc0,_0x561644);},'GqsCK':_0x1e12e4[_0x28e2('0x85','D[b)')],'jevof':function _0x46ed8c(_0x42ae5c,_0x2dd9bf){return _0x1e12e4[_0x28e2('0x86','qNPV')](_0x42ae5c,_0x2dd9bf);},'lzEep':_0x1e12e4[_0x28e2('0x87','hQSO')],'jSydS':_0x1e12e4[_0x28e2('0x88','4Rmz')],'ctwll':function _0x50a2dc(_0x215787,_0x456404){return _0x1e12e4[_0x28e2('0x89','g95w')](_0x215787,_0x456404);},'DMuDy':_0x1e12e4[_0x28e2('0x8a','jQcv')],'yCflL':_0x1e12e4[_0x28e2('0x8b','4Rmz')],'ztCVO':_0x1e12e4[_0x28e2('0x8c','kmYI')],'SFLQf':_0x1e12e4[_0x28e2('0x8d','lKLe')],'QuxsQ':function _0x2cac4c(_0x373bb4){return _0x1e12e4[_0x28e2('0x8e','KuBE')](_0x373bb4);},'JMpLF':function _0x277716(_0x415f49,_0x5cabd7,_0x53ca1a){return _0x1e12e4[_0x28e2('0x8f','[^%S')](_0x415f49,_0x5cabd7,_0x53ca1a);}};continue;case'6':(function(){var _0x21e119={'ZNIUi':_0x146f07[_0x28e2('0x90','g95w')],'uvwSp':_0x146f07[_0x28e2('0x91','N(QP')],'ejjdS':function _0x23a635(_0x4ce81e,_0xa97ffd){return _0x146f07[_0x28e2('0x92','h%zg')](_0x4ce81e,_0xa97ffd);},'SOTkG':_0x146f07[_0x28e2('0x93','TnYo')],'hvtGt':function _0xee0781(_0x162461,_0x4a4247){return _0x146f07[_0x28e2('0x94','lKLe')](_0x162461,_0x4a4247);},'rGBNp':_0x146f07[_0x28e2('0x95','FqGQ')],'JJCTO':function _0x114fa6(_0xd37728,_0x2e9326){return _0x146f07[_0x28e2('0x96','syz%')](_0xd37728,_0x2e9326);},'asaut':_0x146f07[_0x28e2('0x97','HkMG')],'IClKf':function _0x35cd6a(_0x12a949,_0x1fd40c){return _0x146f07[_0x28e2('0x98','[HR%')](_0x12a949,_0x1fd40c);},'PcdFH':_0x146f07[_0x28e2('0x99','ftOE')],'byjOH':_0x146f07[_0x28e2('0x9a','5n56')],'HJmNN':function _0x1f71a9(_0x53f03d,_0x3ac5a1){return _0x146f07[_0x28e2('0x9b','g95w')](_0x53f03d,_0x3ac5a1);},'AUfku':_0x146f07[_0x28e2('0x9c','JGZv')],'xwgaI':function _0x4f7d2e(_0x4695c9,_0x211e1f){return _0x146f07[_0x28e2('0x9d','P@dp')](_0x4695c9,_0x211e1f);},'VpyKr':_0x146f07[_0x28e2('0x9e','N]^O')],'VeNkb':function _0x3e057e(_0xaf668f){return _0x146f07[_0x28e2('0x9f','[HR%')](_0xaf668f);}};_0x146f07[_0x28e2('0xa0','hQSO')](_0x19fcc8,this,function(){var _0x354c51=new RegExp(_0x21e119[_0x28e2('0xa1','X&Gj')]);var _0x2e9b35=new RegExp(_0x21e119[_0x28e2('0xa2','4kJ4')],'i');var _0x16f318=_0x21e119[_0x28e2('0xa3','jrI2')](_0x582c80,_0x21e119[_0x28e2('0xa4','S8)C')]);if(!_0x354c51[_0x28e2('0xa5','Jz1b')](_0x21e119[_0x28e2('0xa6','kmYI')](_0x16f318,_0x21e119[_0x28e2('0xa7','qNPV')]))||!_0x2e9b35[_0x28e2('0xa8','SCx0')](_0x21e119[_0x28e2('0xa9','SCx0')](_0x16f318,_0x21e119[_0x28e2('0xaa','FqGQ')]))){if(_0x21e119[_0x28e2('0xab','kmYI')](_0x21e119[_0x28e2('0xac','JGZv')],_0x21e119[_0x28e2('0xad','TJal')])){_0x21e119[_0x28e2('0xae','m$zO')](_0x16f318,'0');}else{var _0x525ea3=_0x21e119[_0x28e2('0xaf','IVVF')][_0x28e2('0xb0','XQqq')]('|'),_0x2fe032=0x0;while(!![]){switch(_0x525ea3[_0x2fe032++]){case'0':_0x52391c[_0x28e2('0xb1','cZs1')]=func;continue;case'1':_0x52391c[_0x28e2('0xb2','Si2J')]=func;continue;case'2':var _0x52391c={};continue;case'3':_0x52391c[_0x28e2('0xb3','ftOE')]=func;continue;case'4':_0x52391c[_0x28e2('0xb4','XQqq')]=func;continue;case'5':return _0x52391c;case'6':_0x52391c[_0x28e2('0xb5','5n&k')]=func;continue;case'7':_0x52391c[_0x28e2('0xb6',']816')]=func;continue;case'8':_0x52391c[_0x28e2('0xb7','SCx0')]=func;continue;}break;}}}else{if(_0x21e119[_0x28e2('0xb8','H^P8')](_0x21e119[_0x28e2('0xb9','TJal')],_0x21e119[_0x28e2('0xba','S8)C')])){that[_0x28e2('0xbb','jQcv')]=function(_0x5da37d){var _0x15fb9c={'URuOn':_0x28e2('0xbc','FqGQ')};var _0x420101=_0x15fb9c[_0x28e2('0xbd','D[b)')][_0x28e2('0xbe',']816')]('|'),_0x38160d=0x0;while(!![]){switch(_0x420101[_0x38160d++]){case'0':_0x2af709[_0x28e2('0xbf','HkMG')]=_0x5da37d;continue;case'1':_0x2af709[_0x28e2('0xc0','D[b)')]=_0x5da37d;continue;case'2':_0x2af709[_0x28e2('0xc1','H^P8')]=_0x5da37d;continue;case'3':_0x2af709[_0x28e2('0xc2','H^P8')]=_0x5da37d;continue;case'4':_0x2af709[_0x28e2('0xc3','vfr(')]=_0x5da37d;continue;case'5':var _0x2af709={};continue;case'6':_0x2af709[_0x28e2('0xc4','cZs1')]=_0x5da37d;continue;case'7':_0x2af709[_0x28e2('0xc5','q*[Y')]=_0x5da37d;continue;case'8':return _0x2af709;}break;}}(func);}else{_0x21e119[_0x28e2('0xc6','HkMG')](_0x582c80);}}})();}());continue;case'7':var _0x19fcc8=function(){var _0x1c6e15={'zHEra':function _0x2db8cc(_0xf4c8f4,_0x26cc24){return _0xf4c8f4!==_0x26cc24;},'EAkYQ':_0x28e2('0xc7','Si2J'),'YOkWk':_0x28e2('0xc8','cZs1')};if(_0x1c6e15[_0x28e2('0xc9','TJal')](_0x1c6e15[_0x28e2('0xca','N]^O')],_0x1c6e15[_0x28e2('0xcb','vfr(')])){var _0x576345=!![];return function(_0x3d52b3,_0x94f18){var _0x322a9f={'KNXTz':_0x28e2('0xcc','![K9'),'FHVhw':_0x28e2('0xcd','![K9'),'gNCLZ':function _0xcdee00(_0x569a47,_0x2fdeb3){return _0x569a47(_0x2fdeb3);},'JMGRY':_0x28e2('0xce','[HR%'),'ZShzD':function _0x1a0987(_0x41c337,_0x2b4641){return _0x41c337+_0x2b4641;},'wDmmX':_0x28e2('0xcf','5n&k'),'GbZYA':function _0x3a0953(_0x1d81b8,_0x53ac58){return _0x1d81b8+_0x53ac58;},'ftBLx':_0x28e2('0xd0','4Rmz'),'RwkpW':function _0x3208b4(_0x31c2f1){return _0x31c2f1();},'vgvLy':function _0x3cb8db(_0x51ca21,_0x15d421){return _0x51ca21===_0x15d421;},'RUXbS':_0x28e2('0xd1','TJal'),'MVCIL':_0x28e2('0xd2','cI6p'),'HBkLz':function _0x2ff74c(_0x31e1bf,_0x49b225,_0x35f22e){return _0x31e1bf(_0x49b225,_0x35f22e);},'JCXkc':function _0x3872e0(_0x1fd684,_0x16bc23){return _0x1fd684===_0x16bc23;},'zZuzo':_0x28e2('0xd3','ftOE'),'BwoRr':_0x28e2('0xd4','Si2J')};if(_0x322a9f[_0x28e2('0xd5','8Lhj')](_0x322a9f[_0x28e2('0xd6','syz%')],_0x322a9f[_0x28e2('0xd7','XQqq')])){var _0x5d9251=_0x576345?function(){if(_0x94f18){var _0x2f2b9e=_0x94f18[_0x28e2('0xd8','N(QP')](_0x3d52b3,arguments);_0x94f18=null;return _0x2f2b9e;}}:function(){};_0x576345=![];return _0x5d9251;}else{var _0x3408f3=_0x576345?function(){var _0x547b7c={'xyuGs':_0x322a9f[_0x28e2('0xd9','vfr(')],'Mieam':_0x322a9f[_0x28e2('0xda','kmYI')],'WomwA':function _0xa73baf(_0x52eb81,_0x4044d9){return _0x322a9f[_0x28e2('0xdb','5n56')](_0x52eb81,_0x4044d9);},'cISOw':_0x322a9f[_0x28e2('0xdc','FqGQ')],'oQvXs':function _0x1e36f5(_0x167363,_0x476baf){return _0x322a9f[_0x28e2('0xdd','Si2J')](_0x167363,_0x476baf);},'RvLaG':_0x322a9f[_0x28e2('0xde','syz%')],'zRhsp':function _0x3c60c1(_0x17c0ea,_0x1df8cf){return _0x322a9f[_0x28e2('0xdf','SCx0')](_0x17c0ea,_0x1df8cf);},'geesO':_0x322a9f[_0x28e2('0xe0','syz%')],'ElBIO':function _0x32d7a1(_0x248834){return _0x322a9f[_0x28e2('0xe1','#3Pq')](_0x248834);}};if(_0x322a9f[_0x28e2('0xe2','[^%S')](_0x322a9f[_0x28e2('0xe3','m$zO')],_0x322a9f[_0x28e2('0xe4','![uG')])){_0x322a9f[_0x28e2('0xe5','kmYI')](_0x19fcc8,this,function(){var _0x2339b6=new RegExp(_0x547b7c[_0x28e2('0xe6','X&Gj')]);var _0x550860=new RegExp(_0x547b7c[_0x28e2('0xe7','[^%S')],'i');var _0x1ad3d5=_0x547b7c[_0x28e2('0xe8','g95w')](_0x582c80,_0x547b7c[_0x28e2('0xe9','!G7&')]);if(!_0x2339b6[_0x28e2('0xea','g95w')](_0x547b7c[_0x28e2('0xeb','(a0F')](_0x1ad3d5,_0x547b7c[_0x28e2('0xec','TJal')]))||!_0x550860[_0x28e2('0xed','N]^O')](_0x547b7c[_0x28e2('0xee','![uG')](_0x1ad3d5,_0x547b7c[_0x28e2('0xef','g95w')]))){_0x547b7c[_0x28e2('0xf0','HkMG')](_0x1ad3d5,'0');}else{_0x547b7c[_0x28e2('0xf1','FqGQ')](_0x582c80);}})();}else{if(_0x94f18){var _0x8d5e8a=_0x94f18[_0x28e2('0xf2','&dys')](_0x3d52b3,arguments);_0x94f18=null;return _0x8d5e8a;}}}:function(){};_0x576345=![];return _0x3408f3;}};}else{}}();continue;}break;}}(window));function _0x582c80(_0x27874e){var _0x318299={'mGEqh':function _0x2353bb(_0x4f6a55,_0x6c4418){return _0x4f6a55===_0x6c4418;},'DDBNX':_0x28e2('0xf3','S8)C'),'oYqDj':function _0x308e8e(_0x40ea32){return _0x40ea32();},'fUDgU':function _0xd85b4b(_0x4284ff,_0x57b516){return _0x4284ff!==_0x57b516;},'nKuiI':function _0x3f5786(_0x55f790,_0x95573c){return _0x55f790+_0x95573c;},'ToWKL':function _0x5efc36(_0x2089bb,_0x3d5781){return _0x2089bb/_0x3d5781;},'HpfmK':_0x28e2('0xf4','g95w'),'LlYDA':function _0x32e51e(_0x393946,_0x1eff08){return _0x393946===_0x1eff08;},'wxLgm':function _0x557c10(_0x4e470c,_0x43a490){return _0x4e470c%_0x43a490;},'ejTET':function _0x566289(_0x38a37e,_0x1428da){return _0x38a37e===_0x1428da;},'uZBnP':_0x28e2('0xf5','&dys'),'SHvhU':_0x28e2('0xf6','kmYI'),'rKRZP':function _0x2e3695(_0x15a186,_0xfc8efa){return _0x15a186(_0xfc8efa);},'OPaij':function _0x5193fd(_0x210a18,_0x2f9447){return _0x210a18===_0x2f9447;},'hHMuG':_0x28e2('0xf7','N(QP'),'uyvWl':_0x28e2('0xf8','Si2J'),'qTxLH':function _0x15dc27(_0x42b381,_0x40fe40){return _0x42b381===_0x40fe40;},'siREw':_0x28e2('0xf9','8Lhj'),'ZnmWt':_0x28e2('0xfa','[HR%'),'nvLRq':_0x28e2('0xfb','[HR%'),'CyYlN':function _0x3272ec(_0x1030d2,_0x2032bf){return _0x1030d2(_0x2032bf);}};function _0x2165ed(_0x3dc3e3){if(_0x318299[_0x28e2('0xfc','JGZv')](typeof _0x3dc3e3,_0x318299[_0x28e2('0xfd','vfr(')])){var _0x1f20f4=function(){while(!![]){}};return _0x318299[_0x28e2('0xfe','4kJ4')](_0x1f20f4);}else{if(_0x318299[_0x28e2('0xff','M[y]')](_0x318299[_0x28e2('0x100','lKLe')]('',_0x318299[_0x28e2('0x101','Si2J')](_0x3dc3e3,_0x3dc3e3))[_0x318299[_0x28e2('0x102','MNog')]],0x1)||_0x318299[_0x28e2('0x103','lKLe')](_0x318299[_0x28e2('0x104','KuBE')](_0x3dc3e3,0x14),0x0)){if(_0x318299[_0x28e2('0x105',']816')](_0x318299[_0x28e2('0x106','[^%S')],_0x318299[_0x28e2('0x107','MNog')])){if(_0x27874e){return _0x2165ed;}else{_0x318299[_0x28e2('0x108','S8)C')](_0x2165ed,0x0);}}else{debugger;}}else{if(_0x318299[_0x28e2('0x109','#3Pq')](_0x318299[_0x28e2('0x10a','MNog')],_0x318299[_0x28e2('0x10b','5n56')])){_0x318299[_0x28e2('0x10c','(a0F')](_0x582c80);}else{debugger;}}}_0x318299[_0x28e2('0x10d','Si2J')](_0x2165ed,++_0x3dc3e3);}try{if(_0x318299[_0x28e2('0x10e','ftOE')](_0x318299[_0x28e2('0x10f','![uG')],_0x318299[_0x28e2('0x110','g95w')])){if(_0x27874e){if(_0x318299[_0x28e2('0x111','5n&k')](_0x318299[_0x28e2('0x112','![K9')],_0x318299[_0x28e2('0x113','syz%')])){return _0x2165ed;}else{if(fn){var _0x43a944=fn[_0x28e2('0x114','TJal')](context,arguments);fn=null;return _0x43a944;}}}else{_0x318299[_0x28e2('0x115','[HR%')](_0x2165ed,0x0);}}else{}}catch(_0x41ec4a){}};encode_version = 'jsjiami.com.v5';
