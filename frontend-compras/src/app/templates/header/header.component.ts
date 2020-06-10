import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../service/header.service';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentNameUser: string;

  constructor(private headerService: HeaderService,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  get existsUser(): boolean {
    if (this.userService.currentUser) {
      this.currentNameUser = "Olá, " + this.userService.currentUser.nome;
      return true;
    } else {
      return false;
    }
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

}
