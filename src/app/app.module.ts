import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { CreateListComponent } from './components/pages/create-list-pages/create-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { HistoryComponent } from "./components/pages/history-pages/history.component";
import { ListComponent } from './components/pages/create-list-pages/list/list.component';
import { HistoryTableComponent } from './components/pages/history-pages/history-table/history-table.component';
import { ItemEditComponent } from './components/pages/create-list-pages/item-edit/item-edit.component';
import { SummaryComponent } from './components/pages/create-list-pages/summary/summary.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartPageComponent } from './components/pages/chart-page/chart-page.component';
import { GoogleChartsModule } from "angular-google-charts";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreateListComponent,
    MenuComponent,
    HistoryComponent,
    ListComponent,
    HistoryTableComponent,
    ItemEditComponent,
    SummaryComponent,
    ChartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
