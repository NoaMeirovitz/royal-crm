import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'customers-component', component: CustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// 1. add routing in the app (cli)
// 2. create components for each page in the application ng g component
// 3. map path to component in routs (app routing module)
// 4. add router link to app component html (app template)
// 5. add the <router-outlet> (it supposed to happen automatically)
