const http=require('http');
const express=require('express');
const path=require('path');
const port=8080;

const app=express();
app.set("view engine",'ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded());


contactList=[
    {
        name:"Sumant",
        phone:"8529151381"
    },
    {
        name:"Shantanu",
        phone:"8856816073"
    }
];
app.get('/',(req,res)=>{
    return res.render("./home",{
        title: "Contacts List",
        contact_list:contactList
    });
    
})

app.post('/create-contact',(req,res)=>{
    contactList.push(req.body);
    res.redirect('back');
})


app.listen(port,(err)=>{
    if(err)console.log(err);
    else console.log("Server up & running!");
})