const PORT = process.env.PORT || 5000
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')
let app = express();

app.use(bodyParser.urlencoded({
      extended: true
}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

let con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "test"
})

function Insert(n) {
      let conn = con.connect(function (err) {
            if (err) {
                  throw err
            } else {
                  console.log("Connected!")
                  let sql = `insert into test_pos(NAME) values ("${n}")`
                  con.query(sql, function (err) {
                        if (err) {
                              console.log('Error insert name');
                              throw err
                        }
                        console.log("Insert name Success")
                  })
            }
      })
}


app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname + '/main.html'))
});

app.post('/save', function (req, res) {
      let path1 = req.path;
      console.log('path : ' + path1);
      let body = req.body;
      console.log('body : ', body);
      let username = body.username
      console.log('username : ', username);
      Insert(username)

      res.send(body);

})


app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname + '/notFound.html'))
});


app.listen(PORT, () => console.log(`Node app running on port ${PORT}`))