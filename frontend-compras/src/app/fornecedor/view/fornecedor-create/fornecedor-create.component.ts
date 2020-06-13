import { Component, OnInit } from '@angular/core';
import { CepService } from '../../service/cep.service';
import { EnderecoModel } from '../../model/endereco-model';
import { FornecedorModel } from '../../model/fornecedor-model';
import { FornecedorService } from '../../service/fornecedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  idFornecedor: number;

  fornecedorForm: FormGroup;
  fornecedor: FornecedorModel;
  endereco: EnderecoModel;

  titleScreen: string;
  txtButton: string;

  constructor(private fornecedorService: FornecedorService,
    private cepService: CepService,
    private router: Router,
    private formBuilder: FormBuilder,
    private msgService: MessageService,
    private route: ActivatedRoute) {
    this.fornecedor = new FornecedorModel();
    this.endereco = new EnderecoModel();
    this.route.params.subscribe(params => this.idFornecedor = params['id']);

    if (this.idFornecedor != undefined) {
      this.titleScreen = "Editar Fornecedor";
      this.txtButton = "Editar";
      this.fornecedorService.getFornecedorById(this.idFornecedor).subscribe(
        (fornecedor) => {
          this.fornecedor = fornecedor;
          this.endereco = fornecedor.endereco;
        },
        (error) => {
          console.log("Error to get Fornecedor by Id:\n" + error);
        }
      );
    } else {
      this.titleScreen = "Novo Fornecedor";
      this.txtButton = "Salvar";
    }
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
    if (this.endereco.cep === undefined || this.endereco.cep.length != 8) {
      this.msgService.showMessage("Preencha o campo CEP!")
      return;
    }

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
