package com.Hardik.employee.Services;

import com.Hardik.employee.Model.Employee;

import java.util.List;


public interface EmployeeService {

	Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeebyid(long id);

    Employee updateEmployee(Long id, Employee employee);
}
