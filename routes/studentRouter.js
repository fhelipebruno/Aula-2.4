import express from 'express';
import { studentModel } from '../models/studentModel.js';

const app = express();
//app.use(express.json());

app.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);

    await student.save();

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/student', async (req, res) => {
  try {
    const student = await studentModel.find({});

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({ _id: id });

    if (!student) {
      res.status(404).send('Documento não encontrado!');
    }

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { app as studentRouter };
