import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRouter.js';

import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.USERDB);

//teste git

try {
  await mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.ttpny.mongodb.net/grades?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log('Conectado ao banco de dados com sucesso!');
} catch (error) {
  console.log(error);
}

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API Started New'));
