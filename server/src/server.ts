import express, { response } from 'express';


const app = express();

app.get('/', (request, response)=>{
  console.log('text0');
  response.send({message:'Hello Typescript!'});
});

app.listen(3333);
