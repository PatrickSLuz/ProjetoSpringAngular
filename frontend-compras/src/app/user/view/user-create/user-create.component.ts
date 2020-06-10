import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userForm: FormGroup;
  user: UserModel;

  constructor(private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private msgService: MessageService) {
    this.user = new UserModel();
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      setor: ['', Validators.required],
      login: ['', Validators.required],
    });
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
        this.msgService.showMessage("Usuário criado com Sucesso!");
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
