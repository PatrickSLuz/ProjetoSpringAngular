import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { FornecedorListDataSource } from './fornecedor-list-datasource';
import { FornecedorModel } from '../../model/fornecedor-model';
import { FornecedorService } from '../../service/fornecedor.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEnderecoComponent } from '../dialog-endereco/dialog-endereco.component';
import { EnderecoModel } from '../../model/endereco-model';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<FornecedorModel>;
  dataSource: FornecedorListDataSource;

  displayedColumns = ['idFornecedor', 'cpfCnpj', 'nomeRazao', 'rgInscricao', 'email', 'telefone', 'endereco', 'acoes'];

  constructor(private fornecedorService: FornecedorService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.fornecedorService.getAllFornecedores().subscribe(fornecedores => {
      this.dataSource = new FornecedorListDataSource(fornecedores);
      this.configPaginator();
    }, error => console.log("Erro get Fornecedores:\n" + error));
  }

  configPaginator() {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  dialogEndereco(endereco: EnderecoModel) {
    this.dialog.open(DialogEnderecoComponent, {
      data: { endereco: endereco },
    }).afterClosed().subscribe();
  }

  deleteFornecedor(fornecedor: FornecedorModel) {
    this.dialog.open(DialogDeleteComponent, {
      data: { fornecedor: fornecedor },
    }).afterClosed().subscribe();
  }
}
