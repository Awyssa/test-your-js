function createUserManager() {
  let user = null;
  return function (name) {
    "use strict";
    user = { name, createdAt: Date.now() };
    return user;
  };
}
const createUser = createUserManager();
const value = createUser("John Doe") === createUser("John Doe");
console.log("value ====", value);
