import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component'
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { EditComponent } from './routes/edit/edit.component';
import { FilterDoubleComponent } from './routes/filter-double/filter-double.component';
import { SortingbydeathComponent } from './routes/sortingbydeath/sortingbydeath.component';
import { SortByComponent } from './routes/sort-by/sort-by.component';
import { FilterbycountryComponent } from './routes/filterbycountry/filterbycountry.component';
import { ApiComponent } from './routes/api/api.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "", redirectTo : '/home', pathMatch: 'full' },
  // { path: "welcome", component : WelcomeComponent },
  { path: "home", component : HomeComponent },
  { path: "about", component : AboutComponent }, //welcome
  { path: "dashboard", component : DashboardComponent },
  // { path: "add", component : AddComponent },
  // { path: "details/:id", component : DetailsComponent },
  // { path: "edit/:id", component: EditComponent },
  // { path: "filterdouble", component: FilterDoubleComponent},
  // { path: "sortingbydeath", component: SortingbydeathComponent},
  // { path: "sortBy", component: SortByComponent},
  // { path: "filterByCountry", component: FilterbycountryComponent},
  // { path: "apicorona", component:ApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
