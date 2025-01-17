const request = require('supertest');
const express = require('express');
const router = require('../src/routes/routes');
const Student = require('../src/models/students');
const axios = require('axios');


describe('Dummy test', () => {
    it('dummy test', async () => {
        expect(true);
    });

// Test generated using Keploy




    
    jest.mock('../src/models/students');
    
    describe('POST /students', () => {
      it('should register a new student', async () => {
        const newStudent = { name: 'Jane Doe', email: 'jane@example.com' };
        Student.prototype.save = jest.fn().mockResolvedValue(newStudent);
    
        const app = express();
        app.use(express.json());
        app.use(router);
    
        const response = await request(app).post('/students').send(newStudent);
        expect(response.status).toBe(201);
        expect(response.text).toBe("Student registration successful!");
      });
    });


// Test generated using Keploy
jest.mock('../src/models/students');
    describe('GET /students', () => {
      it('should return a list of students', async () => {
        const mockStudents = [{ name: 'John Doe', email: 'john@example.com' }];
        Student.find = jest.fn().mockResolvedValue(mockStudents);
        
        const app = express();
        app.use(router);
        
        const response = await request(app).get('/students');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockStudents);
      });
    });

// Test generated using Keploy
jest.mock('../src/models/students');
    describe('GET /student', () => {
      it('should return a student by name and email', async () => {
        const mockStudent = [{ name: 'Jane Doe', email: 'jane@example.com' }];
        Student.find = jest.fn().mockResolvedValue(mockStudent);
        
        const app = express();
        app.use(router);
        
        const response = await request(app).get('/student?name=Jane Doe&email=jane@example.com');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockStudent);
      });
    });

// Test generated using Keploy
jest.mock('../src/models/students');
    describe('GET /student/:name', () => {
      it('should return a student by name', async () => {
        const mockStudent = [{ name: 'John Doe', email: 'john@example.com' }];
        Student.find = jest.fn().mockResolvedValue(mockStudent);
        
        const app = express();
        app.use(router);
        
        const response = await request(app).get('/student/John Doe');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockStudent);
      });
    });

// Test generated using Keploy
jest.mock('../src/models/students');
    describe('DELETE /student/:id', () => {
      it('should return 404 when the student does not exist', async () => {
        Student.findByIdAndDelete = jest.fn().mockResolvedValue(null);
    
        const app = express();
        app.use(router);
    
        const response = await request(app).delete('/student/12345');
    
        expect(response.status).toBe(404);
        expect(response.text).toBe('Student not found');
      });
    });


// Test generated using Keploy
jest.mock('axios');
    describe('POST /post', () => {
      it('should handle a successful API call to an external service', async () => {
        const mockApiResponse = { data: { id: 1, name: 'Test User' } };
        axios.post = jest.fn().mockResolvedValue(mockApiResponse);
    
        const app = express();
        app.use(router);
    
        const response = await request(app).post('/post');
    
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockApiResponse.data);
      });
    });


// Test generated using Keploy
jest.mock('axios');
    describe('GET /get', () => {
      it('should handle an error from the external API', async () => {
        axios.get = jest.fn().mockRejectedValue(new Error('API Error'));
    
        const app = express();
        app.use(router);
    
        const response = await request(app).get('/get');
    
        expect(response.status).toBe(400);
        expect(response.text).toContain('Failed to fetch req details as');
      });
    });

  })