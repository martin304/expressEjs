const express=require("express");
const app=express();
app.set("view engine","ejs");

 app.get("/",(req,res)=>{
    const student={
        name:'joe doe',
        email:'joe@email.com',
        age:'30',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
    res.render("pages/home",{students:student})
 })
 app.get("/about",(req,res)=>{
    res.render("pages/about")
 })
 app.get("/contact",(req,res)=>{
    res.render("pages/contact")
 })
app.listen(4000);
console.log("server is listening on 4000")