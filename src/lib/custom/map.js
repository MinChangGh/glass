export default function MapLoader(vendor) {
    let initFun = null;
    switch (vendor) {
        case 'gd':
            initFun = aMap;
            break;
        case 'qq':
            initFun = qMap;
            break;
        default:
            initFun = aMap;
            break;
    }
    return initFun();
}

function appendScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    //script.onerror = reject;
    document.head.appendChild(script);
}

//高德地图
function aMap() {
    return new Promise((resolve, reject) => {
        if (window.AMap) {
            resolve(window.AMap);
        } else {
            appendScript('http://webapi.amap.com/maps?v=1.4.13&callback=initAMap&key=6f58f8f460fa138f43b0708419f0aa83');
        }
        window.initAMap = () => {
            resolve(window.AMap);
        }
    })
}

//腾讯地图
function qMap() {
    return new Promise((resolve, reject) => {
        if (window.qq) {
            resolve(window.qq);
        } else {
            appendScript('http://map.qq.com/api/js?v=2.exp&callback=initQMap&key=SQJBZ-ODYWX-ZVI4U-ZFUSX-TUXK3-CDBTR');
        }
        window.initQMap = () => {
            resolve(window.qq);
        }
    })
}