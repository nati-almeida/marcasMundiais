import express from "express";


const app = express();
app.use(express.json());

// router

app.listen(3000,() =>{
    console.log("servidor funcionado na porta 3000.")
})