import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../../model/user-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  idUsuario: number;
  userForm: FormGroup;
  user: UserModel;

  titleScreen: string;
  txtButton: string;

  constructor(private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private msgService: MessageService,
    private route: ActivatedRoute) {
    this.user = new UserModel();
    this.route.params.subscribe(params => this.idUsuario = params['id']);

    if (this.idUsuario != undefined) {
      this.titleScreen = "Editar Usuário";
      this.txtButton = "Editar";
      userService.getUserById(this.idUsuario).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.log("Error to get User by id:\n" + error);
        }
      );
    } else {
      this.titleScreen = "Novo Usuário";
      this.txtButton = "Cadastrar";
    }
  }

  ngOnInit(): void {
    if (this.idUsuario != undefined) {
      this.userForm = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', null],
        setor: ['', Validators.required],
        login: ['', null],
      });
    } else {
      this.userForm = this.formBuilder.group({
        nome: ['', Validators.required],
        email: ['', Validators.required],
        setor: ['', Validators.required],
        login: ['', Validators.required],
      });
    }
  }

  get formData() {
    return this.userForm.controls;
  }

  createUser(): void {
    // stop here if form is invalid
    if (this.userForm.invalid) {
      this.msgService.showMessage("Verifique os Campos e tente novamente!");
      return;
    }

    this.userService.create(this.user).subscribe(
      () => {
        if (this.idUsuario != undefined) {
          this.msgService.showMessage("Usuário editado com Sucesso!");
        } else {
          this.msgService.showMessage("Usuário criado com Sucesso!");
        }
        this.cancel();
      },
      (error) => {
        console.log("Erro create User:\n" + error);
      });
  }

  cancel(): void {
    if (this.userService.currentUser) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/user/list']);
    }
  }

}
