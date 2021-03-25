const express = require('express') //express 모듈을 가져온다. 
const app = express() //express의 function을 이용해서 새로운 express app을 만든다.
const port = 5000 //백서버로 5000번을 사용한다. 

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jipark:qwerty92@boilerplate.lzkfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, //안쓰면 에러난다
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
}).then(()=> console.log('MongoDB Connected..'))
.catch(err => console.log(err)) 



app.get('/', (req, res) => res.send('Hello World!')) //root 디렉토리에 오면 Hello World 가출력된다. 

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) //port 5000에서 실행한다. 