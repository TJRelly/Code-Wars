const userFunctionStore = {
  sayType: function () {
    console.log("I am a " + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

/*** CHALLENGE 10 ***/

const adminFunctionStore = {
  __proto__: userFunctionStore,
};

/*** CHALLENGE 11, 12, 13 ***/

function adminFactory(name, score) {
  let admin = Object.create(adminFunctionStore);
  admin.type = "Admin";
  admin.name = name;
  admin.score = score;
  return admin;
}

/*** CHALLENGE 14 ***/
/* Put code here for a method called sharePublicMessage*/
adminFunctionStore.sharePublicMessage = function () {
  console.log("Welcome users!");
};

const adminFromFactory = adminFactory("Eva", 5);
console.log(adminFromFactory.name)
// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType(); // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"
let user = new userFactory("Tom", 7)
console.log(user.name)
