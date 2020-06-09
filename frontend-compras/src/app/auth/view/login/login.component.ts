import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../service/authentication.service';
import { dataAuth } from 'src/dataAuth';
import { UserService } from 'src/app/user/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from 'src/app/user/model/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      email: ['', Validators.required]
    });

    // get return url from route parameters or default to '/home'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.showMessage("Verifique os Campos e tente novamente!");
      return;
    }

    this.loading = true;
    let user = new UserModel();
    user.email = this.f.email.value;
    user.login = this.f.login.value;
    this.userService.login(user).subscribe(
      user => {
        this.userService.currentUser = user;
        console.log("USER LOGADO")
        this.authetication();
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );

  }

  authetication(): void {
    this.authenticationService.login(dataAuth.username, dataAuth.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.authenticationService.setUserName(dataAuth.username);
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "", {
      duration: 4000,
      horizontalPosition: "end",
      verticalPosition: "top"
    })
  }

}
