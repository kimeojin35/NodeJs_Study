function add1(s, b) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => x + y;

function not1(x) {
  return !x;
}

const not2 = (x) => !x;

var relationship1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function () {
    var that = this;
    this.friends.forEach((friend) => {
      console.log(this.name, friend);
    });
  },
};

const relationship2 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends() {
    var that = this;
    this.friends.forEach((friend) => {
      console.log(this.name, friend);
    });
  },
};
