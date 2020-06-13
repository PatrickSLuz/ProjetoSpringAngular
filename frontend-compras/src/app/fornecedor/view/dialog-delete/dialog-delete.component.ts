import { Component, OnInit, Inject } from '@angular/core';
import { FornecedorModel } from '../../model/fornecedor-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FornecedorService } from '../../service/fornecedor.service';
import { MessageService } from 'src/app/service/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  fornecedor: FornecedorModel;

  constructor(private fornecedorService: FornecedorService,
    private msgService: MessageService,
    private router: Router,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.fornecedor = this.data.fornecedor;
  }

  ngOnInit() {
  }

  hideDialog() {
    this.router.navigate(['/fornecedor/list']);
    this.dialogRef.close();
  }

  deleteFornecedor() {
    this.fornecedorService.deleteFornecedorById(this.fornecedor.idFornecedor).subscribe(
      (fornecedor) => {
        if (fornecedor != undefined) {
          this.msgService.showMessage("Fornecedor excluido com Sucesso!!");
        } else {
          this.msgService.showMessage("Houve um Erro ao excluir o Fornecedor!!");
        }
        this.hideDialog();
      },
      (error) => {
        console.log("Error to delete Fornecedor:\n" + error);
        this.hideDialog();
      }
    )
  }
}
