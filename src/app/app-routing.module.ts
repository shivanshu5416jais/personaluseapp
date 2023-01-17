import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobhomeComponent } from './jobhome/jobhome.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', 
  component: HomeComponent },
  { path: 'create', 
  component: JobhomeComponent, 
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
