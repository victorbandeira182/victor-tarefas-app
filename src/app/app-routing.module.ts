import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './core/containers/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent];
