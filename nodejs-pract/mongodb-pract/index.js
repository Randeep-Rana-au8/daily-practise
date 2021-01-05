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
async function createCourse() {
  const course = new Course({
    name: "Reactjs course",
    author: "Randeep Rana",
    isReady: true,
  });

  const result = await course.save();
  console.log(result);
}
createCourse();
