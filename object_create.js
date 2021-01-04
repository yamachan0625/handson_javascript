// * プロパティ記述子
//    enumerable:   true なら for-in などによる列挙の対象になる
//    configurable: true ならプロパティを削除したり記述子を変更できる
//    writable:     trueならプロパティに値を代入できる

// 　　　　　　　　　　　　　　↓継承するオブジェクトを第一引数に
vec = Object.create(Object.prototype, {
  x: {
    value: 3,
    writable: true,
    enumerable: true,
  },
  y: {
    value: 4,
    writable: true,
    enumerable: true,
  },
  length: {
    enumerable: false,
    get: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    set: function (len) {
      const current = this.length;
      this.x *= len / current;
      this.y *= len / current;
    },
  },
});
// {x:3,y:4}

vec.length; // 5

vec.length = 50; // 50
vec; //{a:30,y:40}
