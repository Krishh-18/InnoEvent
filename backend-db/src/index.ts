import express from 'express';
const app = express();

//backend routes here

app.use(express.json());

app.post('/signup', (req, res) => { 
    //signup route
});

app.post('/signin', (req, res) => { 
    //signin route
});

app.listen(3000, () => {
  console.log('Server is running on port 5000');
});