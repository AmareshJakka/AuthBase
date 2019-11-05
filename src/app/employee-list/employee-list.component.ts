import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees;
  selectedEmp;
  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.employees = this.dataService.getEmployees();
  }
  public selectEmployee(employee){
    this.selectedEmp = employee;
  }

}
