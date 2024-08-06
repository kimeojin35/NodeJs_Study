const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

function findAndSaveUser(Users) {
  Users.findOne({}, (err, user) => {
    // 콜백1
    if (err) {
      return console.error(err);
    }
    user.name = "zero";
    user.save((err) => {
      // 콜백2
      if (err) {
        return console.error(err);
      }
      Users.findOne({ gender: "m" }, (err, user) => {
        // 콜백3
        // 생략
      });
    });
  });
}

function findAndSaveUser2(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = "zero";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "m" });
    })
    .then((user) => {
      // 생략
    })
    .catch((err) => {
      console.error(err);
    });
}
