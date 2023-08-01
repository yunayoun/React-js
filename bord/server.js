const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req,res)=>{
  res.send([
    {
    'id': '1',
    'image': 'https://picsum.photos/64/64',
    'name': '홍길동',
    'birthday': '392039',
    'gender': '남자',
    'job': '학생',
  },{
    'id': '2',
    'image': 'https://picsum.photos/64/64',
    'name': '김철수',
    'birthday': '456722',
    'gender': '남자',
    'job': '엔지니어',
  },{
    'id': '3',
    'image': 'https://picsum.photos/64/64',
    'name': '박춘향',
    'birthday': '123456',
    'gender': '여자',
    'job': '사업가',
  }]);
});

app.listen(port,() => console.log(`listening on port ${port}`));
