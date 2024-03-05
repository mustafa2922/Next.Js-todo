import mongoose from "@/db";


async function ConnectMongo() {
    const db = mongoose.connection;
    db.on('error',console.error.bind(console,"=========== Error Connecting Mongodb ==========="))    
    db.once('open',()=>{
        console.log("=========== Connected To Mongodb ==========")
    });
};

export default ConnectMongo;
