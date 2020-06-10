import { Component, OnInit, Inject } from '@angular/core';
import { UserModel } from 'src/app/user/model/user-model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-solicitante',
  templateUrl: './dialog-solicitante.component.html',
  styleUrls: ['./dialog-solicitante.component.css']
})
export class DialogSolicitanteComponent implements OnInit {

  user: UserModel;

  constructor(public dialogRef: MatDialogRef<DialogSolicitanteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.user = this.data.user;
  }

  ngOnInit() {
  }

  hideDialog() {
    this.dialogRef.close();
  }
}
