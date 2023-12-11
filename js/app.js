const mongoose=require('mongoose')

async function connectToDatababase(){
    mongoose.connect("mongodb://localhost:27017/test")
    .then(()=>{
        console.log('mongodb connected');
    })
    .catch(()=>{
        console.log('error');
    })
}
module.exports = connectToDatababase;