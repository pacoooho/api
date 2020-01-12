import mongoose from 'mongoose';

mongoose.connect( process.env.MONGODB_URI +''  || 'mongodb://localhost:27017/test'
,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(db => console.log("database is connected"))
.catch(err => console.log(err));
