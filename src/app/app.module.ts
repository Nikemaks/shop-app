import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./components/pages/main-page/main-page.component";
import { CreateListComponent } from "./components/pages/create-list-pages/create-list.component";
import { HistoryComponent } from "./components/pages/history-pages/history.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ListComponent } from "./components/pages/create-list-pages/list/list.component";
import { HistoryTableComponent } from "./components/pages/history-pages/history-table/history-table.component";
import { ItemEditComponent } from "./components/pages/create-list-pages/item-edit/item-edit.component";
import { SummaryComponent } from "./components/pages/create-list-pages/summary/summary.component";
import { ChartPageComponent } from "./components/pages/chart-page/chart-page.component";
import { GoogleChartComponent, GoogleChartsModule } from "angular-google-charts";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/compiler";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreateListComponent,
    HistoryComponent,
    MenuComponent,
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
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
