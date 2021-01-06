const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongo-exercise", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const schema = {
  _id: String,
  name: String,
  isPublished: Boolean,
  tags: [String],
  author: String,
  price: Number,
};

const Course = mongoose.model("Course", schema);
// Method 1 TO UPDATE A FIELD
// async function updateCourse(id) {
//   const course = await Course.findById(id);
//   course.name = "HTML CSS JAVASCRIPT ALL IN ONE";
//   course.author = "Randeep Rana";
//   const result = await course.save();
//   console.log(result);
// }
// updateCourse("5a68fdd7bee8ea64649c2777");

// METHOD 2 TO UPDATE A FIELD
// async function updateCourse(id) {
//   const course = await Course.updateOne(
//     { _id: id },
//     {
//       $set: {
//         name: "Driving",
//         author: "Dilip Joshi",
//       },
//     }
//   );
//   console.log(course);
// }
// updateCourse("5a68fdd7bee8ea64649c2777");

// METHOD 2 TO UPDATE A FIELD
async function updateCourse(id) {
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        name: "Cooking",
        author: "apna jayka",
      },
    },
    { new: true }
  );

  console.log(course);
}
updateCourse("5a68fdd7bee8ea64649c2777");
