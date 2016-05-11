var app = require("express")();
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", upload.single("file"), function(req,res){
    if(!req.file) res.json({"error":"file not uploaded"});
    res.json({"size": req.file.size,"type": req.file.mimetype});
});

app.listen(process.env.PORT);