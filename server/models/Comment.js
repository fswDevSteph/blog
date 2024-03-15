const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

commentSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const Comments = model('Comment', commentSchema);

module.exports = Comments;