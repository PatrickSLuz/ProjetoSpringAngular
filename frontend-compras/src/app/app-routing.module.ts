import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './templates/home/home.component';

import { RequisicaoListComponent } from './requisicao/view/requisicao-list/requisicao-list.component';
import { RequisicaoCreateComponent } from './requisicao/view/requisicao-create/requisicao-create.component';

import { FornecedorListComponent } from './fornecedor/view/fornecedor-list/fornecedor-list.component';
import { FornecedorCreateComponent } from './fornecedor/view/fornecedor-create/fornecedor-create.component';

import { CotacaoListComponent } from './cotacao/view/cotacao-list/cotacao-list.component';
import { CotacaoCreateComponent } from './cotacao/view/cotacao-create/cotacao-create.component';

import { UserListComponent } from './user/view/user-list/user-list.component';
import { UserCreateComponent } from './user/view/user-create/user-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'requisicao/list', component: RequisicaoListComponent },
  { path: 'requisicao/create', component: RequisicaoCreateComponent },
  { path: 'fornecedor/list', component: FornecedorListComponent },
  { path: 'fornecedor/create', component: FornecedorCreateComponent },
  { path: 'cotacao/list', component: CotacaoListComponent },
  { path: 'cotacao/create', component: CotacaoCreateComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/create', component: UserCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
