// シンボルは一意の値を持つことができる
const s1 = Symbpl('desc');
const s2 = Symbpl('desc');
console.log(s1 === s2); //false

// プロパティのキーとして文字列ではなくシンボルを利用することで、
// その値を意図しない上書きから守ることができる
range = Symbol('range');
let theFoo = {};
theFoo[Symbol('range')];
console.log(theFoo); //{Symbol(range): "D"}

// グローバルシンボルレジストリ
// Symbopl.forは引数として与えられた文字列をキーとしたシンボルがレジストリに登録されていればそのシンボルを返し
// 登録されていなければ新たにシンボルを作成し、そのシンボルを返す
speed = Symbol.for('speed'); // Sybpol(speed)
speed === Symbol.for('speed'); // true
speed === Symbol('speed'); // false

Symbol.keyFor(speed); // "speed"
Symbol.keyFor(power); // undefined
