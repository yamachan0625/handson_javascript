//  open() メソッ ドに引数としてデータベース名とそのバージョンを渡します。
indexedDB.open("jobdb", 1);

// indexDBに対する全ての操作は非同期です。つまりopenメソッドを呼び出しても、
// その直後にデータベースへの接続が完了しているわけではない
let openRequest = indexedDB.open("jojodb", 1);
openRequest.addEventListener("success", (evt) =>
  console.log("success:", evt.target.result)
);
openRequest.addEventListener("error", (evt) =>
  console.log("success:", evt.target.errorCode)
);

let openRequest = indexedDB.open("jojodb", 2);
openRequest.addEventListener("upgradeneeded", (evt) => {
  const db = evt.target.result;
  // オブジェクトストアの作成
  const standStore = db.createObjectStore("stands", {
    // 保存するオブジェクトのキーとして使用されるプロパティのパス。オブジェクトごとに一意の値を取る必要がある
    keyPath: "id",
    // true に設定すると、キーを自動的にインクリメントして一意性を保証する
    autoIncrement: true,
  });
  console.log(standStore);
});

//インデックスを定義する
let db;
let openRequest = indexedDB.open("jojodb", 1);
openRequest.addEventListener("upgradeneeded", (evt) => {
  db = evt.target.result;
  const standStore = db.createObjectStore("stands", {
    keyPath: "id",
    autoIncrement: true,
  });
  //   createIndex()メソッドの引数は3つで第一引数がインデックス名、第二引数が対象プロパティ名、第３引数がオプション
  standStore.createIndex("nameIndex", "name", { unique: true }); // true に設定すると一意な値しか許可されない
  standStore.createIndex("powerIndex", "power");
});

// オブジェクトを追加する
let transaction = db.transaction(["stands"], "readwrite"); // 操作対象のオブジェクトス トアがひとつだけなので第一引数は配列にせず、文字列のまま渡してもかまいません。
transaction.addEventListener("complete", (evt) =>
  console.log("transaction complete")
);
let standStore = transaction.objectStore("stands");
let addRequest = standStore.add({
  name: "The Fool",
  power: "B",
  speed: "C",
  range: "D",
});
addRequest.addEventListener("success", (evt) =>
  console.log(`add success (Key:${evt.target.result})`)
);

// 5件オブジェクトを登録
let transaction = db.transaction("stands", "readwrite");
let standStore = transaction.objectStore("stands");
standStore.add({ name: "Crazy Diamond", power: "A", speed: "A", range: "D" });
standStore.add({ name: "Echoes", power: "E", speed: "E", range: "B" });
standStore.add({ name: "The Hand", power: "B", speed: "B", range: "D" });
standStore.add({ name: "The World", power: "A", speed: "A", range: "C" });
standStore.add({
  name: "Hierophant Green",
  power: "C",
  speed: "B",
  range: "A",
});

// キーを指定してオブジェクトを取得する
let standStore = db.transaction("stands").objectStore("stands");
getRequest = standStore.get(1);
getRequest.addEventListener("success", (evt) => console.log(evt.target.result)); // {name: "The Fool", power: "B", speed: "C", range: "D", id: 1}

// indexを使用してオブジェクトを取得する
let transaction = db.transaction("stands");
let nameIndex = transaction.objectStore("stands").index("nameIndex");
nameIndex
  .get("Echoes") // 該当する全てのオブジェクトを取得するためにはgetAllを使用する
  .addEventListener("success", (evt) => console.log(evt.target.result)); // {name: "Echoes", power: "E", speed: "E", range: "B", id: 3}
