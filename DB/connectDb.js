var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://adminUser:admin123@ds243344.mlab.com:43344/facerecapp', {
    useNewUrlParser: true,
    useCreateIndex: true
});

module.exports = { mongoose };