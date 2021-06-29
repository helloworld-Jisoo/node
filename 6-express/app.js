import express from 'express';
const app = express();

app.all('/api/*',(req, res, next)=> {
  console.log('all');
  next();
})
app.use('/sky',(req, res, next)=> {
  console.log('use');
  next();
})

app.get(
  '/', 
  (req, res, next)=> {
  console.log('first');
  if(true){
    return res.send('Hello');
  }
  res.send('Jisoo');
},
 (req, res, next)=> {
  console.log('first-2');

})

app.get('/', (req,res,next)=> {
  console.log('second');
});

app.use((req,res,next)=>{
  res.status(404).send('Not available@_@');
})

app.use((error,req,res,next) => {
  console.log(error);
  res.status(500).send('Sorry, try later!');
})
app.listen(8080);

