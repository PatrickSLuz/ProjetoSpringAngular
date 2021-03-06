import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

// JWT
import { JwtInterceptor } from './auth/service/jwt-interceptor';
import { ErrorInterceptor } from './auth/service/error-interceptor';

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
import { LoginComponent } from './auth/view/login/login.component';
import { DialogEnderecoComponent } from './fornecedor/view/dialog-endereco/dialog-endereco.component';
import { DialogItensComponent } from './requisicao/view/dialog-itens/dialog-itens.component';
import { DialogSolicitanteComponent } from './requisicao/view/dialog-solicitante/dialog-solicitante.component';
import { DialogDeleteComponent } from './fornecedor/view/dialog-delete/dialog-delete.component';
import { DialogRequisicaoComponent } from './cotacao/view/dialog-requisicao/dialog-requisicao.component';
import { DialogItensCotadosComponent } from './cotacao/view/dialog-itens-cotados/dialog-itens-cotados.component';

// Material Design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

// Registrar Localização
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

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
    UserCreateComponent,
    LoginComponent,
    DialogEnderecoComponent,
    DialogItensComponent,
    DialogSolicitanteComponent,
    DialogDeleteComponent,
    DialogRequisicaoComponent,
    DialogItensCotadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    // Material Design
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
