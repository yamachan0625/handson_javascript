// 支払い確認ダイアログを表示するにはまず PaymentRequest クラスをインスタンス化 します。
// PaymentRequest() コンストラクタには第一引数に利用するカードの種類、
// 第 二引数に購入アイテムの情報を指定します。
// PaymentRequest オブジェクトの show() メソッドを呼び出すとダイアログが表示さ れて、
// 支払情報に解決される Promise が返ります。今回は支払情報を toJSON() メソッ ドで
//  JSON 形式にしてコンソールに表示しているだけですが、実際にはこの情報をサー バに送信して
//  決済を実行してください。最後に支払情報の complete() メソッドを呼び 出すと決済フローが完了します。
let supportedInstruments = [
  {
    supportedMethods: ["basic-card"],
    data: { supportedNetworks: ["visa", "mastercard"] },
  },
];
let details = {
  displayItems: [
    { label: "かけそば", amount: { currency: "JPY", value: "150" } },
  ],
  total: { label: "合計", amount: { currency: "JPY", value: "150" } },
};
let request = new PaymentRequest(supportedInstruments, details);
request.show().then((result) => {
  console.log(result.toJSON());
  // result.toJSON()をサーバに送信して決済を実行する result.complete("success")
});
