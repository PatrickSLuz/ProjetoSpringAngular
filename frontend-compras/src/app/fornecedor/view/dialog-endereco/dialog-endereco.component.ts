import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnderecoModel } from '../../model/endereco-model';

@Component({
  selector: 'app-dialog-endereco',
  templateUrl: './dialog-endereco.component.html',
  styleUrls: ['./dialog-endereco.component.css']
})
export class DialogEnderecoComponent implements OnInit {

  endereco: EnderecoModel;

  constructor(public dialogRef: MatDialogRef<DialogEnderecoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.endereco = this.data.endereco;
  }

  ngOnInit() {
  }

  hideDialog() {
    this.dialogRef.close();
  }
}
