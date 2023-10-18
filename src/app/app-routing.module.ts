import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfComponent } from './components/if/if.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', //localhost:4200
    redirectTo: '/home', //localhost:4200/home
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'if', //localhost:4200/if
    component: IfComponent
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: '**', // IT will check given url path above of this line, if not match it will open page not found Means Wild Card Entry. it won't check after this even those if you mentioned any path after this path and it should be last route entry only
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
