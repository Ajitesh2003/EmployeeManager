// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      setEmployees(response.data.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const addEmployee = async (employee) => {
    try {
      const response = await axios.post(
        "https://dummy.restapiexample.com/api/v1/create",
        employee
      );
      setEmployees([...employees, response.data.data]);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const updateEmployee = async (id, updatedEmployee) => {
    try {
      await axios.put(
        `https://dummy.restapiexample.com/api/v1/update/${id}`,
        updatedEmployee
      );
      setEmployees(
        employees.map((emp) => (emp.id === id ? updatedEmployee : emp))
      );
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(
        `https://dummy.restapiexample.com/api/v1/delete/${id}`
      );
      setEmployees(employees.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      <h1>Employee Manager</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList
        employees={employees}
        updateEmployee={updateEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;
