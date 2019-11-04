import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



const routes: Routes = [{path:  "", pathMatch:  "full",redirectTo:  "home"},
{path: "home", component: HomeComponent},
{path: "employee-list", component: EmployeeListComponent},
{path: "add-employee", component: AddEmployeeComponent} ,
{path:"contactUs" ,component:ContactUsComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
