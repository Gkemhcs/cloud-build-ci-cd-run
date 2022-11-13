const express=require("express")
const app=express()
app.get("/",(req,res)=>{
res.send("welcome to my world version1.0")

})

app.listen(8080,()=>{
console.log("server running on port 8080")
})
