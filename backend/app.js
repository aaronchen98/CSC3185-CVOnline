const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser');
const file = './setting.json';
const result = JSON.parse(fs.readFileSync(file))
var multiparty = require('multiparty');  //解析器
const child_process = require('child_process');
const port = result.server.PORT

var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3000',
    exposedHeaders: 'Authorization',
    credentials: true,
}

const spawn = child_process.spawn;

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
	//解析post中的data
	const result = req.body;
	console.log(result);
	res.send('success')
})

app.post('/upload/classification', async (req, res) => {
    // 解析一个文件上传
 	var form = new multiparty.Form({uploadDir: './uploads/classification'});
  	form.parse(req, function(err, fields, files) {
   		if(err) {
         console.log('parse error: ' + err);
      	} 
      	else {
      		console.log(files)
         var inputFile = files.file[0]
         var uploadedPath = inputFile.path;

          console.log('filespath='+uploadedPath);
          console.log('filesTmp: ' + inputFile);
          console.log('Filename: ' + inputFile.originalFilename);

          var dstPath = './uploads/classification/target.jpg';
          // var dstPath = './uploads/' + inputFile.originalFilename;
           //重命名为真实文件名
            fs.rename(uploadedPath, dstPath, function(err) {
             if(err){
              console.log('rename error: ' + err);
            } else {
                console.log('rename ok');
              }
            });
        }

        //执行python文件
        const pp = spawn('python3', ['./py/Classification.py']);
        // const pp = spawn('python', ['./test.py', 'hello']);
        pp.stdout.on('data', (data) => {
			console.log(`stdout: ${data}`);
    });
    pp.stderr.on('data', (data) => {
			console.log(`stdout: ${data}`);
    });
		//python文件运行结束后
		pp.on('close', (code) => {
			//回传图片
			console.log('close')
          var input = fs.readFileSync('./uploads/classification/target.jpg'); 
          var output = fs.readFileSync('py/output/classification.png'); 
      var inputBase64 = input.toString("base64");
      var outputBase64 = output.toString("base64");
      res.send({in:inputBase64,out:outputBase64})
		})

    })

})


app.post('/upload/detection', async (req, res) => {
  // 解析一个文件上传
 var form = new multiparty.Form({uploadDir: './uploads/detection'});
  form.parse(req, function(err, fields, files) {
     if(err) {
       console.log('parse error: ' + err);
      } 
      else {
        console.log(files)
       var inputFile = files.file[0]
       var uploadedPath = inputFile.path;

        console.log('filespath='+uploadedPath);
        console.log('filesTmp: ' + inputFile);
        console.log('Filename: ' + inputFile.originalFilename);

        var dstPath = './uploads/detection/target.jpg';
        // var dstPath = './uploads/' + inputFile.originalFilename;
         //重命名为真实文件名
          fs.rename(uploadedPath, dstPath, function(err) {
           if(err){
            console.log('rename error: ' + err);
          } else {
              console.log('rename ok');
            }
          });
      }

      //执行python文件
      const pp = spawn('python3', ['./py/ObjectDetection.py']);
      // const pp = spawn('python', ['./test.py', 'hello']);
      pp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  pp.stderr.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  //python文件运行结束后
  pp.on('close', (code) => {
    //回传图片
    console.log('close')
    var input = fs.readFileSync('./uploads/detection/target.jpg'); 
    var output = fs.readFileSync('py/output/detection.png'); 
var inputBase64 = input.toString("base64");
var outputBase64 = output.toString("base64");
res.send({in:inputBase64,out:outputBase64})
  })

  })

})


app.post('/upload/segmentation', async (req, res) => {
  // 解析一个文件上传
 var form = new multiparty.Form({uploadDir: './uploads/segmentation'});
  form.parse(req, function(err, fields, files) {
     if(err) {
       console.log('parse error: ' + err);
      } 
      else {
        console.log(files)
       var inputFile = files.file[0]
       var uploadedPath = inputFile.path;

        console.log('filespath='+uploadedPath);
        console.log('filesTmp: ' + inputFile);
        console.log('Filename: ' + inputFile.originalFilename);

        var dstPath = './uploads/segmentation/target.jpg';
        // var dstPath = './uploads/' + inputFile.originalFilename;
         //重命名为真实文件名
          fs.rename(uploadedPath, dstPath, function(err) {
           if(err){
            console.log('rename error: ' + err);
          } else {
              console.log('rename ok');
            }
          });
      }

      //执行python文件
      const pp = spawn('python3', ['./py/SemanticSegmentation.py']);
      // const pp = spawn('python', ['./test.py', 'hello']);
      pp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  pp.stderr.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  //python文件运行结束后
  pp.on('close', (code) => {
    //回传图片
    console.log('close')
    var input = fs.readFileSync('./uploads/segmentation/target.jpg'); 
    var output = fs.readFileSync('py/output/segmentation.png'); 
var inputBase64 = input.toString("base64");
var outputBase64 = output.toString("base64");
res.send({in:inputBase64,out:outputBase64})
  })

  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})