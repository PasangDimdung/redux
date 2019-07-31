import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './tasking/todo-list/todo-list.component';
import { TodoDashboardComponent } from './tasking/todo-dashboard/todo-dashboard.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { MessagingModule } from './messaging/messaging.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    MessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension){
    
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
 }
