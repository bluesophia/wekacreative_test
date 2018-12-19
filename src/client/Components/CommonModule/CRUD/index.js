// AJAX의 4가지 과정
// 1. XMLHTTP request object를 만든다.

// request를 보낼 준비를 브라우저에게 시키는 과정이다. 
// 이것을 위해서 필요한 method를 갖춘 object가 필요하다.
//2.  callback 함수를 만든다.

// 서버에서 response가 왔을 때 실행시키는 함수이다
// html 페이지를 업데이트한다.
// Open a request

// 여기서 브라우저에게 두 가지 정보를 넘긴다.

// 브라우저가 request를 보내기 위해 사용할 method(ex:post)
// 그리고 request가 갈 URL
// send the request


var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'YOUR_USERNAME',
      password : 'YOUR_PASSWORD',
      database : 'DB_NAME'
    }
);
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
 
/* Begin transaction */
connection.beginTransaction(function(err) {
  if (err) { throw err; }
  connection.query('INSERT INTO names SET name=?', "sameer", function(err, result) {
    if (err) { 
      connection.rollback(function() {
        throw err;
      });
    }
 
    var log = result.insertId;
 
    connection.query('INSERT INTO log SET logid=?', log, function(err, result) {
      if (err) { 
        connection.rollback(function() {
          throw err;
        });
      }  
      connection.commit(function(err) {
        if (err) { 
          connection.rollback(function() {
            throw err;
          });
        }
        console.log('Transaction Complete.');
        connection.end();
      });
    });
  });
});
/* End transaction */