import { Router } from '@angular/router';
import { UsersService } from './../../../Services/users.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;

  constructor(private formbuilder: FormBuilder, private userService: UsersService, private router: Router){}

  ngOnInit(): void {
    
    this.loginForm = this.formbuilder.group({
      correo:[""],
      password:[""]
    })
  }

  public onSubmit(){
    this.userService.login(this.loginForm.value).subscribe((data:any) => {
      localStorage.setItem('token', data?.token);
      this.userService.isLoggedIn = true;
      this.router.navigate(['/']);
    })

  }
}

