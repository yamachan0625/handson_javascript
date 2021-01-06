// JSON オブジェクトを使用せずにディープコピーする関数(deepCopy())を実装し、
// 以下のオブジェクトで動作を確認してください。
let ko1 = {
  id: 1,
  name: "Echoes",
  parameters: [
    { power: "E", speed: "E", range: "B" },
    { power: "C", speed: "D", range: "B" },
    { power: "B", speed: "B", range: "C" },
  ],
};

const deepCopy = (obj) => {
  let copyObj;
  // オブジェクトが配列なら配列のプロパティをdeepCopy関数に渡す
  if (Array.isArray(obj)) {
    copyObj = obj.map((e) => {
      return deepCopy(e);
    });
  } else if (typeof obj === "object") {
    // オブジェクトの場合はキー、バリューを列挙し、バリューをdeepCopy関数に渡す
    copyObj = {};
    for (let [k, v] of Object.entries(obj)) {
      copyObj[k] = deepCopy(v);
    }
  } else {
    // プリミティブ地の場合はそのままreturnする
    copyObj = obj;
  }
  return copyObj;
};

const ko2 = deepCopy(ko1);
