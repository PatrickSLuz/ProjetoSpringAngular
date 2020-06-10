import { Component, OnInit, Inject } from '@angular/core';
import { RequisicaoItemModel } from '../../model/requisicao-item-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dialog-itens',
  templateUrl: './dialog-itens.component.html',
  styleUrls: ['./dialog-itens.component.css']
})
export class DialogItensComponent implements OnInit {

  itens: RequisicaoItemModel[];
  dataSource = new MatTableDataSource<any>();

  displayedColumns = ['descricao', 'quantidade'];

  constructor(public dialogRef: MatDialogRef<DialogItensComponent>,
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
