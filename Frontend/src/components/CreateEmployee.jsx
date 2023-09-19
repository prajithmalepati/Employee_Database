
import React, { useState } from 'react';

function CreateEmployee() {
  const [name, setName] = useState('');

  async function createEmployee(event) {
    event.preventDefault();

    if (!name || /^\s*$/.test(name) || /^\d+$/.test(name)) {
      alert('Please enter a valid non-numeric name.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        setName('');
      } else {
        alert('Error creating employee.');
      }
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  }

  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={createEmployee}>
        <label htmlFor="createName">Name:</label>
        <input
          type="text"
          id="createName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateEmployee;
