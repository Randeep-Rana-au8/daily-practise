const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo-exercise", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schema = new mongoose.Schema({
  name: String,
  isPublished: Boolean,
  price: Number,
  author: String,
  date: { type: Date, default: Date.now },
  tags: [String],
});

const Course = mongoose.model("Course", schema);

async function createCourse() {
  const result = await Course.find({ isPublished: true, tags: "backend" })
    .sort({ name: 1 })
    .select({ author: 1, name: 1 });
  return result;
}

async function run() {
  const output = await createCourse();
  console.log(output);
}
createCourse();
run();
