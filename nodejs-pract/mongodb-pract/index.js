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

//THIS FUNCTION IS RETUNING FILTERED VALUES
// async function getCourseByFiltering() {
//   const res = await Course.find({ isReady: true })
//     .sort({ name: 1 })
//     .limit(10)
//     .select({
//       name: 1,
//       author: 1,
//     });
//   console.log(res);
// }
// getCourseByFiltering();

//THIS FUNCTION IS RETURNING FILTERED VALUES WITH COMPARISION QUERY OPERATORS
// async function getCourseByFiltering() {
//eq => equals to
//neq => not equals to
//lt => less than
//lte => less than or equals to
//gt => greator than
//gte => greator than or equals to
//in => returns the element if the values match the values of the array
//nin => not in

//   const res = await Course
//     .find({ $in: [10, 20, 25] })
//     .sort({ name: 1 })
//     .limit(10)
//     .select({
//       name: 1,
//       author: 1,
//     });
//   console.log(res);
// }
// getCourseByFiltering();

//  THIS FUNCTION RETURNING FILTERED VALUE BY LOGICAL OPERATORS
// async function getCourseByFiltering() {
// logical operators
// or =>
// and =>
//   const res = await Course.find({})
//     .or([{ isReady: true }, { author: "Randeep Rana" }])
//     .sort({ name: 1 })
//     .limit(10)
//     .select({
//       name: 1,
//       author: 1,
//     });
//   console.log(res);
// }
// getCourseByFiltering();

// THIS FUNCTION RETURNS FILTERED VALUE BY REGULAR EXPRESSIONS
async function getCourseByFiltering() {
  // REGULAR EXPRESSIONS

  const res = await Course
    // if i want to console the elements in which author name starts with Randeep
    .find({ name: /^Randeep/ })

    //if i want to console the elements in which author name ends with Rana
    .find({ name: /Rana$/ })

    //if i want to console the elements in which author name contains Rana
    .find({ name: /.*Rana.*/ })

    .sort({ name: 1 })
    .limit(10)
    .select({
      name: 1,
      author: 1,
    });
  console.log(res);
}
getCourseByFiltering();
