import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './templates/header/header.component';
import { NavigationComponent } from './templates/navigation/navigation.component';
import { HomeComponent } from './templates/home/home.component';
import { RequisicaoListComponent } from './requisicao/view/requisicao-list/requisicao-list.component';
import { RequisicaoCreateComponent } from './requisicao/view/requisicao-create/requisicao-create.component';
import { FornecedorListComponent } from './fornecedor/view/fornecedor-list/fornecedor-list.component';
import { FornecedorCreateComponent } from './fornecedor/view/fornecedor-create/fornecedor-create.component';
import { CotacaoListComponent } from './cotacao/view/cotacao-list/cotacao-list.component';
import { CotacaoCreateComponent } from './cotacao/view/cotacao-create/cotacao-create.component';
import { UserListComponent } from './user/view/user-list/user-list.component';
import { UserCreateComponent } from './user/view/user-create/user-create.component';

// Material Design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    // Components
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    RequisicaoListComponent,
    RequisicaoCreateComponent,
    FornecedorListComponent,
    FornecedorCreateComponent,
    CotacaoListComponent,
    CotacaoCreateComponent,
    UserListComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // Material Design
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
