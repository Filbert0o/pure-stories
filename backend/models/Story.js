import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const StorySchema = new Schema({
  category: {
    type: [String]
  },
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  bodyText: {
    type: String,
    required: true
  },
  favorite: {
    type: Boolean,
    default: false
  },
  thumbnail: {
    type: String
  },
  rating: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      author: {
        type: String,
      },
      text: {
          type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
}, {timestamps: true});

export default mongoose.model('stories', StorySchema);
