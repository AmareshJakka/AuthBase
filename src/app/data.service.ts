import { Injectable } from '@angular/core';
import { Identifiers } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Employees = [
    {id: 1, name: "AUB 001", description: "AUB 001 des", email: "aub001@email.com"},
    {id: 2, name: "AUB 002", description: "AUB 002 des", email: "aub002@email.com"},
    {id: 3, name: "AUB 003", description: "AUB 003 des", email: "aub003@email.com"},
    {id: 4, name: "AUB 004", description: "AUB 004 des", email: "aub004@email.com"}
  ];
  constructor() { }

  public getEmployees():Array<{id,name,description,email}>{
    return this.Employees;
  } 
  
  public addEmployee(employee:{id,name,description,email}){
    this.Employees.push(employee);
  }
}
