import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
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
