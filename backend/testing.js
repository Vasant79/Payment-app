const bycrpt = require("bcrypt");
let password = "vasant";

bycrpt.hash(password, 10, (err, hash) => {
  if (hash) {
    hashedPasswordDb = hash;
    console.log(hash);
  }
  //store this hashPassword for user
});

// compareing password with db password hash
bycrpt.compare(password, hashedPasswordDb, (err, hash) => {
  if (hash) {
    console.log("Password correct");
  } else {
    console.log("error ", err);
  }
});
