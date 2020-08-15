// Require mongoose to create schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the workout Schema
// The day is type date with a default of the current date
// Array of exercises with type, name, duration, weight, reps, sets, distance
// Total Duration
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String, required: true },
      name: { type: String, required: true },
      duration: { type: Number, required: false },
      weight: { type: Number, required: false },
      reps: { type: Number, required: false },
      sets: { type: Number, required: false },
      distance: { type: Number, required: false },
    },
  ],
});

//Mongoose model that will be called with const Workout
const Workout = mongoose.model("Workout", workoutSchema);
// Export Workout
module.exports = Workout;
