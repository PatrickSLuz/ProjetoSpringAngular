import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// JWT
import { AuthGuardService } from './auth/service/auth-guard.service';

import { HomeComponent } from './templates/home/home.component';
import { RequisicaoListComponent } from './requisicao/view/requisicao-list/requisicao-list.component';
import { RequisicaoCreateComponent } from './requisicao/view/requisicao-create/requisicao-create.component';
import { FornecedorListComponent } from './fornecedor/view/fornecedor-list/fornecedor-list.component';
import { FornecedorCreateComponent } from './fornecedor/view/fornecedor-create/fornecedor-create.component';
import { CotacaoListComponent } from './cotacao/view/cotacao-list/cotacao-list.component';
import { CotacaoCreateComponent } from './cotacao/view/cotacao-create/cotacao-create.component';
import { UserListComponent } from './user/view/user-list/user-list.component';
import { UserCreateComponent } from './user/view/user-create/user-create.component';
import { LoginComponent } from './auth/view/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'requisicao/list', component: RequisicaoListComponent, canActivate: [AuthGuardService] },
  { path: 'requisicao/create', component: RequisicaoCreateComponent, canActivate: [AuthGuardService] },
  { path: 'fornecedor/list', component: FornecedorListComponent, canActivate: [AuthGuardService] },
  { path: 'fornecedor/create', component: FornecedorCreateComponent, canActivate: [AuthGuardService] },
  { path: 'cotacao/list', component: CotacaoListComponent, canActivate: [AuthGuardService] },
  { path: 'cotacao/create', component: CotacaoCreateComponent, canActivate: [AuthGuardService] },
  { path: 'user/list', component: UserListComponent, canActivate: [AuthGuardService] },
  { path: 'user/update/:id', component: UserCreateComponent, canActivate: [AuthGuardService] },
  { path: 'user/create', component: UserCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
