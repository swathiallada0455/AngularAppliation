import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListInfoComponent } from './list-info/list-info.component';


const routes: Routes=[
  {
      path:'',redirectTo:'lists',pathMatch:'full'
  },
  {
      path:'lists', component:ListComponent
  },
  {
    path:'viewuser/:id', component:ListInfoComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
