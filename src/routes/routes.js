const express = require('express');
const router = new express.Router();
const Student = require('../models/students');
const axios = require('axios');

router.get('/students', async (req, res) => {
  try {
    const studentList = await Student.find();
    res.status(200).send(studentList);
  } catch (err) {
    res.status(400).send(`Failed to fetch student data as ${err}`);
  }
});

router.get('/student', async (req, res) => {
  try {
    const { name, email } = req.query;
    const studentList = await Student.find({ name, email });
    res.status(200).send(studentList);
  } catch (err) {
    res.status(400).send(`Failed to fetch student data as ${err}`);
  }
});

router.get('/student/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const studentList = await Student.find({ name });
    res.status(200).send(studentList);
  } catch (err) {
    res.status(400).send(`Failed to fetch student data as ${err}`);
  }
});

router.post('/students', async (req, res) => {
  const stud = new Student(req.body);
  try {
    await stud.save();
    res.status(201).send("Student registration successful!");
  } catch (e) {
    res.status(400).send(`Failed to register Student as ${e}`);
  }
});

router.patch('/student/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate({ _id: id }, req.body, { new: true });
    res.status(200).send(`Student detail updated to \n ${updatedStudent}`);
  } catch (err) {
    res.status(400).send(`Failed to update Student details as ${err}`);
  }
});

router.delete('/student/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete({ _id: id });
    if (!deletedStudent) {
      return res.status(404).send('Student not found');
    }
    res.status(200).send(`Deleted student record successfully \n ${deletedStudent}`);
  } catch (err) {
    res.status(500).send(`Failed to delete Student details as ${err}`);
  }
});

router.post('/post', async (req, res) => {
  try {
    const response = await axios.post('https://reqres.in/api/users', {
      data: 'new data'
    });
    res.status(200).send(response.data);
  } catch (err) {
    res.status(400).send(`Failed to post req data as ${err}`);
  }
});

router.get('/get', async (req, res) => {
  try {
    const axiosResponse = await axios.get('https://reqres.in/api/users');
    res.status(200).json(axiosResponse.data);
  } catch (err) {
    res.status(400).send(`Failed to fetch req details as ${err}`);
  }
});
module.exports = router;
