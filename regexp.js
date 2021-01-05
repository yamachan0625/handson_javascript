// +     直前の文字の 1 回以上の繰り返し 直前の文字の 0 回以上の繰り返し
// *     直前の文字の 0 回以上の繰り返し
// ?     前の文字の 0 回または 1 回の登場 直前の文字の n 回の繰り返し
// {n}   直前の文字の n 回の繰り返し
// {n,}  直前の文字の n 回以上の繰り返し
// {n,m} 直前の文字の n 回以上、m 回以下の繰り返し

// > shout
// /URY+/
// > "UR".match(/URY?/)
// ["UR", index: 0, input: "UR", groups: undefined]
// > "URY".match(/URY?/)
// ["URY", index: 0, input: "URY", groups: undefined]
// > "URYY".match(/URY?/)
// ["URY", index: 0, input: "URYY", groups: undefined]
// > "UR".match(/URY*/)
// ["UR", index: 0, input: "UR", groups: undefined]
// > "URY".match(/URY*/)
// ["URY", index: 0, input: "URY", groups: undefined]
// > "URYYYY".match(/URY*/)
// ["URYYYY", index: 0, input: "URYYYY", groups: undefined]

shout = /URY+/;
match = 'URYYY'.match(shout); // ["URYYY", index: 0, input: "URYYY", groups: undefined]
match = 'WRYYY'.match(shout); // null

// これらの正規表現を | で繋ぐといずれかに一致おする正規表現になります。3つ以上も可能
shout2 = /URY+|WRY+/;
match = 'URYYY'.match(shout); // ["URYYY", index: 0, input: "URYYY", groups: undefined]
match = 'WRYYY'.match(shout); // ["WRYYY", index: 0, input: "WRYYY", groups: undefined]

// グループ化 正規表現グループに一致した部分文字列も取得できる
shout = /(U|W)RY+/;
match = 'URYYY'.match(shout); // ["URYYY", "U", index: 0, input: "URYYY", groups: undefined]
match = 'WRYYY'.match(shout); // ["WRYYY", "W", index: 0, input: "WRYYY", groups: undefined]

'(U|W)RY+'.match(shout); // null
'(U|W)RY+'.match(/\(U\|W\)RY\+/);
