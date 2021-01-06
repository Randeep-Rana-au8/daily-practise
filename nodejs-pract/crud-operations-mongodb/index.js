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

async function getCourse(id) {
  const course = await Course.findById(id);
  course.name = "HTML CSS JAVASCRIPT ALL IN ONE";
  course.author = "Randeep Rana";
  const result = await course.save();
  console.log(result);
}

getCourse("5a68fdd7bee8ea64649c2777");
