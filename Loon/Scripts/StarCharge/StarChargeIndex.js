if (!$response.body) {
    $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
// obj.data.homePageFrame = [
//     {
//         "startTime": "2019.11.02 00:00:00",
//         "endTime": "2019.11.03 23:59:59",
//         "frame": [
//             {
//                 "moduleType": 4,
//                 "moduleName": "快速入口",
//                 "moduleNameShowFlag": false,
//                 "moduleSort": 1
//             },
//             {
//                 "moduleType": 7,
//                 "moduleName": "电站列表",
//                 "moduleNameShowFlag": true,
//                 "listSize": 15,
//                 "moduleSort": 2
//             }
//         ]
//     }
// ];
obj.data = [
    {
      "id": "7a287577e47349dc90a0f36bb745c8f7",
      "name": "券包",
      "title": "券包",
      "icon": "https://app-cdn.starcharge.com/webDir/375dd744-88dc-9990-2fd7-a549237d1903.png",
      "img": "https://app-cdn.starcharge.com/webDir/375dd744-88dc-9990-2fd7-a549237d1903.png",
      "isUser": 1,
      "isFullScreen": 0,
      "refType": 0,
      "refUrl": "/pagesSub/coupon/index",
      "sort": 2
    },
    {
      "id": "0701c13867e249369c1eacdc7652cac0",
      "name": "会员",
      "title": "会员",
      "icon": "https://app-cdn.starcharge.com/webDir/72b6c940-6ba3-4e85-f02a-010d93082524.png",
      "img": "https://app-cdn.starcharge.com/webDir/72b6c940-6ba3-4e85-f02a-010d93082524.png",
      "isUser": 1,
      "isFullScreen": 0,
      "refType": 0,
      "refUrl": "/pages/vip5/index",
      "sort": 3
    },
    {
      "id": "3ae08184852042b887856445a3025b82",
      "name": "电池",
      "title": "电池",
      "icon": "https://app-cdn.starcharge.com/webDir/b3b2501e-4f0b-1c36-3013-b35a3df6fc1b.png",
      "img": "https://app-cdn.starcharge.com/webDir/b3b2501e-4f0b-1c36-3013-b35a3df6fc1b.png",
      "isUser": 1,
      "isFullScreen": 0,
      "refType": 1,
      "refUrl": "https://app-taro.starcharge.com/pages/sohInsurance/index/index",
      "sort": 4
    },
    {
      "id": "f7d67c9a6b76472aa4a6ae1ca8722acd",
      "name": "认证",
      "title": "认证",
      "icon": "https://app-cdn.starcharge.com/webDir/0235fd27-595b-af64-7ed3-5b97f573e104.png",
      "img": "https://app-cdn.starcharge.com/webDir/0235fd27-595b-af64-7ed3-5b97f573e104.png",
      "isUser": 1,
      "isFullScreen": 0,
      "refType": 0,
      "refUrl": "/pagesSub/myCars/index/index",
      "sort": 5
    }
  ]
body = JSON.stringify(obj);
$done({ body });