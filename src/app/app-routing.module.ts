import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "", redirectTo:'/test', pathMatch:'full'},//pathMatch: full ou prefix
  { path: "users", component: UsersComponent},
  { path: "test", component: TestComponent},
  { path: "departments", component: DepartmentListComponent},
  { path: "department/:id", 
    component: DepartmentDetailComponent,
    children:[
      {path: "overview", component: DepartmentOverviewComponent},
      {path: "contact", component: DepartmentContactComponent}
    ]
  },
  { path: "employees", component: EmployeeListComponent},
  { path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TestComponent, UsersComponent, EmployeeListComponent, DepartmentListComponent,PageNotFoundComponent, DepartmentDetailComponent,DepartmentOverviewComponent,DepartmentContactComponent]
