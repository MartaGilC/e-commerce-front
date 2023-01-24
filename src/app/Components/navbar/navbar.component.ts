import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  public active: boolean = false;
    constructor(public userService: UsersService){}

    ngOnInit(): void {
      this.userService.isLogged();
    }
    logout(){
      this.userService.logout();
    }
    setActive(): void{
      this.active = !this.active
    }
}
