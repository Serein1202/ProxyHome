if (!$response.body) {
	$done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
obj.data = [
    {
      "title": null,
      "sort": 10,
      "itemList": [
        {
          "id": "1d2a2779-7369-47ab-bcce-2d8112b6cd08",
          "refUrl": "/pagesSub/myOrderList/index",
          "refType": 0,
          "title": "我的订单",
          "isUser": 0,
          "picUrl": "https://app-cdn.starcharge.com/webDir/495d2942-64ce-f620-adc2-220752a27fc2.png",
          "startVersion": "",
          "endVersion": "",
          "rule": "{\"startVersion\":\"\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0,
          "displayChannel": "1,2"
        },
        {
          "id": "1e52a7a2-b130-41ff-9d9d-787320a10bae",
          "refUrl": "/pagesSub/invoice/applyEntrance",
          "refType": 0,
          "title": "开具发票",
          "isUser": 0,
          "picUrl": "https://app-cdn.starcharge.com/webDir/a2daf29f-7fc1-409a-2a55-f98afa96a5e3.png",
          "startVersion": "",
          "endVersion": "",
          "rule": "{\"startVersion\":\"\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0,
          "displayChannel": "1,2"
        },
        {
          "id": "2d0c1057-4d72-4ab5-93a8-3470b0a9a29d",
          "refUrl": "/pagesSub/kefu/center?query={\"pageType\":\"mine\"}",
          "refType": 0,
          "title": "客服中心",
          "isUser": 0,
          "picUrl": "https://app-cdn.starcharge.com/webDir/1ee4ac8d-757b-db45-f1c9-4d05ac752418.png",
          "startVersion": "",
          "endVersion": "",
          "rule": "{\"startVersion\":\"\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0,
          "displayChannel": "1,2"
        },
        {
          "id": "65e12f84-6dc9-46fe-8dee-8947ce6d03fb",
          "refUrl": "https://app-taro.starcharge.com/pages/sohInsurance/index/index",
          "refType": 1,
          "title": "星电守护",
          "isUser": 1,
          "picUrl": "https://app-cdn.starcharge.com/webDir/d09b4ff0-dac2-c5a4-7ffa-4d5b217073ed.png",
          "startVersion": "",
          "endVersion": "",
          "rule": "{\"startVersion\":\"\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0,
          "displayChannel": "1,2"
        }
      ]
    },
    {
      "title": null,
      "sort": 11,
      "itemList": [
        {
          "id": "2dd5f955-a9d4-41c9-bde2-c3dab85e6691",
          "refUrl": "https://app-taro.starcharge.com/pages/introductionPage/drawTheGun/index",
          "refType": 1,
          "title": "无法拔枪",
          "isUser": 0,
          "picUrl": "https://app-cdn.starcharge.com/webDir/07e95eb9-744a-0647-c0ab-4f6dd81fff60.png",
          "startVersion": "",
          "endVersion": "",
          "rule": "{\"startVersion\":\"\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0,
          "displayChannel": "1,2"
        },
        {
          "id": "b2ff7a4b-6303-4f7f-a283-8c71e5a2c93b",
          "refUrl": "/pagesSub/myFavorite/index?from=my",
          "refType": 0,
          "title": "收藏电站",
          "isUser": 1,
          "picUrl": "https://app-cdn.starcharge.com/webDir/ead945f1-74cf-d175-ebc4-f7267e1ed83e.png",
          "startVersion": "",
          "endVersion": "",
          "rule": "{\"startVersion\":\"\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0,
          "displayChannel": "1,2"
        },
        {
          "id": "74f35831-b84e-4bab-aaf1-be47b19f7542",
          "refUrl": "/pagesSub/myCars/index/quickCharge",
          "refType": 0,
          "title": "即插即充",
          "isUser": 1,
          "picUrl": "https://app-cdn.starcharge.com/webDir/694605ac-dadc-8b69-21e5-c46593f8bb01.png",
          "startVersion": "",
          "endVersion": "",
          "rule": "{\"startVersion\":\"\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0,
          "displayChannel": "1,2"
        }
      ]
    }
  ];
body = JSON.stringify(obj);
$done({ body });