const { default: mongoose } = require("mongoose");

function dbConnect() {
  try {
    mongoose.connect(
      `mongodb+srv://vasantnegi7:vasu210@cluster0.clypnms.mongodb.net/payment_app`
    );

    console.log(`db connected`);
  } catch (err) {
    console.log(`err at db connection ${err}`);
  }
}

module.exports = {
  dbConnect,
};
