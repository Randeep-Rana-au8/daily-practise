const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/payload", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connect to mongodb...."));

const schema = mongoose.Schema({
  name: String,
  author: String,
  isReady: Boolean,
  date: { type: Date, default: Date.now },
});

const Course = mongoose.model("Course", schema);
const course = new Course({
  name: "Nodejs course",
  author: "Randeep Rana",
  isReady: true,
});
