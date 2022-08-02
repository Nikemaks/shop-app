import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from "./components/pages/history-pages/history.component";
import { CreateListComponent } from "./components/pages/create-list-pages/create-list.component";
import { ChartPageComponent } from "./components/pages/chart-page/chart-page.component";

export const routes: Routes = [
  {path: '', component: CreateListComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'create', component: CreateListComponent},
  {path: 'chart', component: ChartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
