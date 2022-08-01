import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { CreateListComponent } from './components/pages/create-list-pages/create-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { HistoryComponent } from "./components/pages/history-pages/history.component";
import { ListComponent } from './components/pages/create-list-pages/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreateListComponent,
    MenuComponent,
    HistoryComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
