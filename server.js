const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/pet', function(요청, 응답){
    응답.send('펫용품 쇼핑을 할 수 있는 페이지입니다.');
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
});

app.get('/random.text', function (req, res) {
    res.send('random.text');
  });

//쿼리 스트링 받는 방법
app.get('/topic', function (req, res) {
    let topic = ['안녕','하세요','반갑습니다']
    res.send(topic[req.query.id]);
})