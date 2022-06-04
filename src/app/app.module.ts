// modules
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { RouterModule,Routes } from '@angular/router';

// containers
import { AppComponent } from './app.component';
import { HeaderComponent } from './conponent/header/header.component';
import { ButtonsComponent } from './conponent/buttons/buttons.component';
import { TasksComponent } from './conponent/tasks/tasks.component';
import { TaskItemsComponent } from './conponent/task-items/task-items.component';
import { AddTaskComponent } from './conponent/add-task/add-task.component';


const appRouter: Routes = [
  { path: '', component: TasksComponent },
  // { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsComponent,
    TasksComponent,
    TaskItemsComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouter,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
