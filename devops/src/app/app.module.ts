import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { DispatcherComponent } from './dispatcher/dispatcher.component';
import { BlankComponent } from './blank/blank.component';

const rootRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'dispatcher', component: DispatcherComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'manage', component: ManageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageComponent,
    DispatcherComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
