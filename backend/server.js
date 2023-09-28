const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const path = require('path');
const config = require ('./config');


const app = express();
const port = 5000;

app.use(cors());


const db = mysql.createPool({
  host: 'localhost',
  user: config.user_name,
  password: config.password,
  database: config.database_name,
});

app.use(express.json());



app.post('/create', async (req, res) => {
    try {
      const { name } = req.body; 
      const [result] = await db.query('INSERT INTO employees (employee_name) VALUES (?)', [name]);
      const newEmployee = { id: result.insertId, employee_name: name };
      res.status(201).json(newEmployee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred.' });
    }
});
  
app.get('/employees', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM employees');
      res.status(200).json(rows);; 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred.' });
    }
});

app.get('/employees/:idOrName', async (req, res) => {
  try {
    const { idOrName } = req.params;

    const isNumeric = !isNaN(idOrName);

    let query;
    let queryParams;

    if (isNumeric) {
      query = 'SELECT * FROM employees WHERE employee_id = ?';
      queryParams = [idOrName];
    } else {
      query = 'SELECT * FROM employees WHERE employee_name = ?';
      queryParams = [idOrName];
    }

    const [rows] = await db.query(query, queryParams);

    if (rows.length === 0) {
      res.status(404).json({ error: 'Employee not found.' });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});

  
app.put('/employees/:idOrName', async (req, res) => {
    try {
      const { idOrName } = req.params;
      const { name } = req.body;
      
      const isNumeric = !isNaN(idOrName);
      
      if (isNumeric) {
        await db.query('UPDATE employees SET employee_name = ? WHERE employee_id = ?', [name, idOrName]);
      } else {
        await db.query('UPDATE employees SET employee_name = ? WHERE employee_name = ?', [name, idOrName]);
      }
  
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred.' });
    }
  });
  
  app.delete('/employees/:idOrName', async (req, res) => {
    try {
      const { idOrName } = req.params;
      const isNumeric = !isNaN(idOrName);
      
      if (isNumeric) {
        await db.query('DELETE FROM employees WHERE employee_id = ?', [idOrName]);
      } else {
        await db.query('DELETE FROM employees WHERE employee_name = ?', [idOrName]);
      }
  
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred.' });
    }

   
  });
  



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
