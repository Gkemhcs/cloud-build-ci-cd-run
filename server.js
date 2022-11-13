const express=require("express")
const app=express()
app.get("/",(req,res)=>{
res.send("<h1><marquee>welcome to my world version 3.0</h1></marquee>")

})

app.listen(8080,()=>{
console.log("server running on port 8080")
})
