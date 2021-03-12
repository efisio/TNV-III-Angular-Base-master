import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './routes/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterDoubleComponent } from './routes/filter-double/filter-double.component';
import { ContinentclassificationPipe } from './pipes/continentclassification.pipe';
import { SortingbydeathComponent } from './routes/sortingbydeath/sortingbydeath.component';
import { SortByComponent } from './routes/sort-by/sort-by.component';
import { WelcomepageComponent } from './routes/welcomepage/welcomepage.component';
import { FilterbycountryComponent } from './routes/filterbycountry/filterbycountry.component';
import { CountryPipe } from './pipes/country.pipe';
import { LoadingpageComponent } from './components/loadingpage/loadingpage.component';
import { ApiserviceService } from './services/apiservice.service';
import { ApiComponent } from './routes/api/api.component';
import { ChartsModule } from 'ng2-charts';
import { MyLineChartComponent } from './charts/my-line-chart/my-line-chart.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { ApiCovidService } from './services/api-covid.service';
import { HomeComponent } from './components/home/home.component';
import { StatisticalCardComponent } from './components/statistical-card/statistical-card.component';
import { WorldDataBarChartComponent } from './charts/world-data-bar-chart/world-data-bar-chart.component';
import { WorldDataDoughnutChartComponent } from './charts/world-data-doughnut-chart/world-data-doughnut-chart.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { SpinnerInterceptor } from './interceptors/spinner-interceptor';
import { AdminDashboardComponent } from './routes/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { UserDashboardComponent } from './routes/user-dashboard/user-dashboard.component';
import { CountryLineChartComponent } from './charts/country-line-chart/country-line-chart.component';
import { AboutVirusComponent } from './routes/about-virus/about-virus.component';
import { AboutOrganizzazioneComponent } from './routes/about-organizzazione/about-organizzazione.component';
import { AboutDatiComponent } from './routes/about-dati/about-dati.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    DetailsComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    FilterDoubleComponent,
    ContinentclassificationPipe,
    SortingbydeathComponent,
    SortByComponent,
    LoadingpageComponent,
    WelcomepageComponent,
    FilterbycountryComponent,
    CountryPipe,
    ApiComponent,
    MyLineChartComponent,
    WelcomeComponent,
    AboutComponent,
    HomeComponent,
    StatisticalCardComponent,
    WorldDataBarChartComponent,
    WorldDataDoughnutChartComponent,
    SpinnerComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    CountryLineChartComponent,
    AboutVirusComponent,
    AboutOrganizzazioneComponent,
    AboutDatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [
    DataService, 
    ApiCovidService,
    ApiserviceService,
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
