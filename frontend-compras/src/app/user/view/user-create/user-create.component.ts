import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from '../../model/user-model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: UserModel = {
    nome: '',
    setor: ''
  };

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "", {
      duration: 4000,
      horizontalPosition: "end",
      verticalPosition: "top"
    })
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.showMessage("Usuário criado com Sucesso!");
      this.cancel();
    });
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }

}
