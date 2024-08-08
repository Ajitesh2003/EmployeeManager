import React, { useState } from "react";

const EmployeeForm = ({ addEmployee }) => {
  const [formData, setFormData] = useState({ name: "", salary: "", age: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    setFormData({ name: "", salary: "", age: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add New Employee</h2>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="number"
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
          placeholder="Salary"
        />
        <input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          placeholder="Age"
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
