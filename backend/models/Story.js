import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.Schema.Types.Boolean.convertToFalse.add('');

// Create Schema
const StorySchema = new Schema({
  category: {
    type: String,
    default: 'no tags'
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
    type: String,
    default: 'https://www.readlightnovel.org/assets/images/noimage.jpg'
  },
  rating: {
    type: Number,
    default: 5
  },
  datepost: {
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
