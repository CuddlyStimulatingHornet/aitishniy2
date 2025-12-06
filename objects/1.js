// const userData = {
//   name: "Alex",
//   age: 20,
//   go() {
//     console.log(this.age);
//   },
// };

class UserData {
  constructor(name) {
    this.name = name;
  }

  go() {
    console.log("!!");
  }
}

const userData1 = new UserData();
userData1.go();

class SpecialUserData extends UserData {
  go() {
    console.log(`- ${this.name} -`);
  }
}
