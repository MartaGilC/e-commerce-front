import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.scss']
})
export class Button2Component implements OnInit{
  public active: boolean = false;
  constructor(public userService: UsersService){ }
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
