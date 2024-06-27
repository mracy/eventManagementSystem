// Import mongoose module
const mongoose = require("mongoose");

// Define the schema for the Event model
const eventSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Title of the event
    date: { type: Date, required: true }, // Date of the event
    location: { type: String, required: true }, // Location of the event
    remind: { type: Boolean, default: false }, // Flag to remind about the event, default to false
});

// Create the Event model based on the schema
const Event = mongoose.model("Event", eventSchema);

// Export the Event model to use in other files
module.exports = Event;

// Example usage:
/*
// Import the Event model
const Event = require("./models/Event");

// Create a new event instance
const newEvent = new Event({
    title: "Birthday Party",
    date: new Date("2024-06-20"),
    location: "123 Main Street, Cityville",
    remind: true
});

// Save the event to the database
newEvent.save()
    .then((savedEvent) => {
        console.log("Event saved successfully:", savedEvent);
    })
    .catch((error) => {
        console.error("Error saving event:", error);
    });
*/
