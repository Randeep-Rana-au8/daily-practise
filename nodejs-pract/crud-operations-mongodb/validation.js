const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongo-exercise", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const courseSchema = {
  _id: Number,
  name: { type: String, required: true },
  isPublished: Boolean,
  tags: [String],
  author: String,
  price: {
    type: Number,
    min: 10,
    max: 300,
  },
  category: {
    type: String,
    enum: ["swimming", "coding"], // this enum validator is doing that catagory should be one of them only
  },
};

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = await new Course({
    _id: 36,
    name: "half stack coding",
    isPublished: true,
    tags: ["Data"],
    author: "Randeep Rana",
    price: 19,
    category: "coding",
  });
  try {
    const result = await course.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

createCourse();
