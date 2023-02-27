// const http = require("http");
// const fs = require("fs");
// const { parse } = require('querystring');
// const port = 7500;

// function hander(req, res) {
//   console.log(req.url);
//   let filepath = req.url;

//   console.log(parse(req.url, true).body)
//   if (req.method === 'POST') {
//     let body = '';
//     req.on('data', chunk => {
//         body += chunk.toString();
//     });
//     req.on('end', () => {
//         console.log(
//             parse(body)
//         );
//         res.end('ok');
//     });
//     console.log('----',body)
// }


// // let name = function name(arr){
// //    let data = arr.map((elem)=>{return elem.name});
// //    return data;
// // }


//   if (filepath == "/") {
//     fs.readFile("index.json", "utf-8", (err, data) => {
//       if (err) {
//         console.log("Error", err);
//         return res.end();
//       }
//       res.writeHead(200, { "content-type": "application/json" });
//       data =JSON.parse(data);
//       console.log(data);
//      // console.log(typeof data, data ,"\n data printed");
//      let arr = data.map((elem)=> elem.id);
//      res.write(JSON.stringify(arr));
//     //  res.write(JSON.stringify(data.map((elem)=>{ return elem.name})));
//       res.end("data" ) ;
//     });
//   } else if (filepath == "/add") {
//     fs.appendFile(
//       "index.json"," add data ",(err) => {  
//         if(err){
//             console.log(err);
//         }

//         console.log("write successfulled");
//         res.end(" data added to the file");
        
//       });
//   }else if(filepath == "/delete"){
//     fs.unlink('index.json' , (err)=>{
//         if(err){
//             console.log(delete successfully);
//         }
//         res.end("file deleted")
//     })
//   } else if(filepath == "/create"){
//     fs.writeFile("index.json" , "new file" ,(err)=>{
//      if(err){
//         console.log(err);
//      }
//      res.end("create a new file");
//     })
//   } else{
//     res.end("do not accept this path");
//   }

// }

// const server = http.createServer(hander);

// server.listen(port, (err) => {
//   if (err) {
//     console.log("server is not started dur to some error", err);
//   }
//   console.log("server is started on port", port);
// });


