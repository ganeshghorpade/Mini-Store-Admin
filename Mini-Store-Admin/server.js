import connectDB from './server/config/db.js';
import app from './server/app.js';
import router from './server/routes/auth.routes.js';

connectDB();

app.use("/api/auth",router);

app.listen(process.env.PORT,()=>{
    console.log("server running");
    
});