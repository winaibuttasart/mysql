
var mysql = require('mysql')

var con = mysql.createConnection({
   host : "localhost",
   user : "root",
   password : "dev2018_pass",
   database : "pos"
})

con.connect(function(err) {
      if(err) throw err
      console.log("Connected!")
      let a = "insert into test_pos(NAME) values ('nai')"
   //     let a = "select * from test_pos"
        con.query(a,function(err,result,fields) {
        if(err) throw err
        console.log(result)
      })

})



























