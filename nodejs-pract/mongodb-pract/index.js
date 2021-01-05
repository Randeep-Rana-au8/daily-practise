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

//this is the function to create new documents in "courses" collection
// async function createCourse() {
//   const course = new Course({
//     name: "Driving course",
//     author: "Randeep Rana",
//     isReady: false,
//   });

//   const result = await course.save();
//   console.log(result);
// }
// createCourse();

//this is the function which returns the all the items from a collection
/* THIS IS THE METHOD TO GET ALL DATA
async function getCourses() {
  const res = await Course.find({});
  console.log(res);
}
*/
// getCourses();

async function getCourseByFiltering() {
  const res = await Course.find({ isReady: true }).select({
    name: 1,
    author: 1,
  });
  console.log(res);
}
getCourseByFiltering();
