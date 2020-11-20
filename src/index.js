const http = require("http");
const fs = require("fs");
const path = require("path");

let crearServidor = (puerto) => {
    http.createServer((request, response)=> {
        let filePath = request.url;
        filePath = __dirname+'/index.html';
         console.log(filePath)
        fileExtension= path.extname(filePath);
        switch (fileExtension) {
            case ".css":
                contentType = "text/css";
			break;
			case ".png":
                contentType = "image/png";
            break;
            case ".js":
                contentType = "text/javascript";
            break;
            case ".html":
                contentType = "text/html";
            default:
                contentType = "text/html";
        }
        fs.readFile(filePath,{encoding:"UTF-8"}, (error,content)=>{
            if(!error) {
                response.writeHead(200, {"Content-Type": contentType});
                response.write(content);
                response.end();
            } else {
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write("error file");
            response.end();
            }
        })
    }).listen(puerto);
};
crearServidor(8000);


/*
express


const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "client")));
app.set("port", (process.env.PORT || 8080));
app.listen(app.get("port"));

w
*/





