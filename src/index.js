import dotenv from 'dotenv'
import connectdb from './db/database.js';
import app from './app.js'; // ✅ this is important!



dotenv.config({
    path: './.env'
})
connectdb()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);

        })
    })
    .catch((error) => {
        console.log("MONGO DB is not connected", error);

    })















// ya phla tareeka ha mongodb connect krna ka ... isko use nai krna ...
// 2 method ha ka ap db folder ma ak file bnaka jasa mana database.js bnayi ha ..usma sara data likh ka idhr import krlo simple

// import express from 'express';
// const app = express()
//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGO_URI}/${backend}`)
//             app.on('error', () => {
//                 console.log("Application is not working now", error);
//                 throw error
//             })
//             app.listen(process.env.PORT, () => {
//                 console.log(`Application is listening on port ${process.env.PORT}`);

//             })

//         } catch (error) {
//             console.log("Error", error);
//             throw error
//         }
//     })()