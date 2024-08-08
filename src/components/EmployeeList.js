import React, { useState } from "react";

const EmployeeList = ({ employees, updateEmployee, deleteEmployee }) => {
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({ name: "", salary: "", age: "" });

  const startEditing = (employee) => {
    setEditingEmployee(employee);
    setFormData({
      name: employee.employee_name,
      salary: employee.employee_salary,
      age: employee.employee_age,
    });
  };

  const handleUpdate = (id) => {
    updateEmployee(id, formData);
    setEditingEmployee(null);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {editingEmployee && editingEmployee.id === employee.id ? (
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Name"
                />
                <input
                  type="number"
                  value={formData.salary}
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })
                  }
                  placeholder="Salary"
                />
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  placeholder="Age"
                />
                <button onClick={() => handleUpdate(employee.id)}>
                  Update
                </button>
              </div>
            ) : (
              <div>
                {employee.employee_name} - {employee.employee_salary} -{" "}
                {employee.employee_age}
                <button onClick={() => startEditing(employee)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
