import { Component, OnInit } from '@angular/core';
import { CepService } from '../../service/cep.service';
import { EnderecoModel } from '../../model/endereco-model';
import { FornecedorModel } from '../../model/fornecedor-model';
import { FornecedorService } from '../../service/fornecedor.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedorForm: FormGroup;
  fornecedor: FornecedorModel;
  endereco: EnderecoModel;

  constructor(private fornecedorService: FornecedorService,
    private cepService: CepService,
    private router: Router,
    private formBuilder: FormBuilder,
    private msgService: MessageService) {
    this.fornecedor = new FornecedorModel();
    this.endereco = new EnderecoModel();
  }

  ngOnInit(): void {
    this.fornecedorForm = this.formBuilder.group({
      cpfCnpj: ['', Validators.required],
      rgInscricao: ['', null],
      nomeRazao: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', null],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', null],
      bairro: ['', Validators.required],
      localidade: ['', Validators.required],
      uf: ['', Validators.required],
    });
  }

  get formData() {
    return this.fornecedorForm.controls;
  }

  createFornecedor(): void {
    // stop here if form is invalid
    if (this.fornecedorForm.invalid) {
      this.msgService.showMessage("Verifique os Campos e tente novamente!");
      return;
    }

    this.fornecedor.endereco = this.endereco;
    this.fornecedorService.create(this.fornecedor).subscribe(
      () => {
        this.msgService.showMessage("Fornecedor criado com Sucesso!!");
        this.cancel();
      },
      (error) => {
        console.log("Erro create Fornecedor:\n" + error);
      }
    );
  }

  searchCep(): void {
    this.cepService.searchCep(this.endereco.cep).subscribe(
      (endereco) => {
        this.endereco = endereco;
      },
      (error) => {
        console.log("Erro search CEP:\n" + error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/fornecedor/list']);
  }

}
