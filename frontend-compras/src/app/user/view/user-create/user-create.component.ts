import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user-model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: UserModel = {
    nome: '',
    email: '',
    setor: '',
    login: '',
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(
      () => {
        this.userService.showMessage("Usuário criado com Sucesso!");
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
