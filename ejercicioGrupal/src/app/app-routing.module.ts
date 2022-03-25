import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: "login",  component: LoginComponent},
  {path: "registro", component: RegisterComponent},
  {path: "inicio", component: PaginaInicioComponent},
  {path: "dash-board", component: DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
