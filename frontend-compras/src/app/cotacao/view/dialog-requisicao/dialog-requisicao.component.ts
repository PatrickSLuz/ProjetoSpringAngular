import { Component, OnInit, Inject } from '@angular/core';
import { RequisicaoModel } from 'src/app/requisicao/model/requisicao-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-requisicao',
  templateUrl: './dialog-requisicao.component.html',
  styleUrls: ['./dialog-requisicao.component.css']
})
export class DialogRequisicaoComponent implements OnInit {

  requisicao: RequisicaoModel;

  constructor(public dialogRef: MatDialogRef<DialogRequisicaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.requisicao = this.data.requisicao;
  }

  ngOnInit() {
  }

  hideDialog() {
    this.dialogRef.close();
  }

}
