import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentUpdateComponent } from './student-update/student-update.component';


const routes: Routes = [
  {path:"register", component:StudentAddComponent},
  {path:"search", component:StudentDeleteComponent},
  {path:"update/:studentId", component:StudentUpdateComponent},
  {path:"register-book", component:BookAddComponent},
  {path:"search-book", component:BookSearchComponent},
  {path:"update-book/:id", component:BookUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
