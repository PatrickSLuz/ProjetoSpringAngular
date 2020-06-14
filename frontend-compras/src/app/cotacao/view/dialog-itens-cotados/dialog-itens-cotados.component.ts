import { Component, OnInit, Inject } from '@angular/core';
import { RequisicaoItemModel } from 'src/app/requisicao/model/requisicao-item-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-itens-cotados',
  templateUrl: './dialog-itens-cotados.component.html',
  styleUrls: ['./dialog-itens-cotados.component.css']
})
export class DialogItensCotadosComponent implements OnInit {

  itens: RequisicaoItemModel[];
  dataSource = new MatTableDataSource<any>();

  displayedColumns = ['descricao', 'quantidade', 'precoUni', 'subTotal'];

  constructor(public dialogRef: MatDialogRef<DialogItensCotadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.itens = this.data.itens;
    this.dataSource.data = this.itens;
  }

  ngOnInit() {
  }

  hideDialog() {
    this.dialogRef.close();
  }
}
