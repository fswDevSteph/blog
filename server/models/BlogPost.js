const { Schema, model } = require('mongoose');

const blogPostSchema = new Schema({
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

blogPostSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const BlogPosts = model('BlogPost', blogPostSchema);

module.exports = BlogPosts;