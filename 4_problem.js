// 「ユーザー(User)は ID(id)と名前(name)を持ち、
// 記事の投稿(post())ができ る。管理者(Administrator)はユーザーと同じことができた上で、
// 記事の公開 (publish())ができる」という要件でユーザークラスと管理者クラスを実装してく ださい。
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  post() {
    console.log('post');
  }
}

class Administrator extends User {
  publich() {
    console.log('publish');
  }
}

let user = new User(1, takashi);
let admin = new Administrator(1, teru);

// Administrator クラスのインスタンスが User クラスのインスタンスとしても有効 であることを instanceof 演算子で確認してみましょう。
admin instanceof User; //true
user instanceof User; //true

// 問 4-1 と同様な関係を持つ user オブジェクトと administrator オブジェクトをオ ブジェクトリテラルで実現してください。
let user = {
  post() {
    console.log(`${this.name}`);
  },
};

let administrator = {
  __proto__: user,
  publish() {
    console.log(`${this.name}`);
  },
};
administrator.id = 999;
administrator.name = '管理者';
administrator.post();
administrator.publish();
