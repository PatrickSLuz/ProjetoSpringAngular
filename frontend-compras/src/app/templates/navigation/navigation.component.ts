import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../service/header.service';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  navigator(index: number): void {
    switch (index) {
      case 1:
        this.buildTextHeader('Início', 'home');
        this.router.navigate(['/home']);
        break;
      case 2:
        this.buildTextHeader('Requisição', 'assignment');
        this.router.navigate(['/requisicao/list']);
        break;
      case 3:
        this.buildTextHeader('Fornecedor', 'work');
        this.router.navigate(['/fornecedor/list']);
        break;
      case 4:
        this.buildTextHeader('Cotação', 'monetization_on');
        this.router.navigate(['/cotacao/list']);
        break;
      case 5:
        this.buildTextHeader('Usuário', 'account_circle');
        this.router.navigate(['/user/list']);
        break;
      case 6:
        this.buildTextHeader('Login', 'login');
        this.router.navigate(['/login']);
        break;
      case 7:
        this.authenticationService.logout();
        this.buildTextHeader('Início', 'home');
        this.router.navigate(['/home']);
        break;
    }
  }

  buildTextHeader(title: string, icon: string): void {
    this.headerService.headerData = {
      title: title,
      icon: icon
    }
  }

}
