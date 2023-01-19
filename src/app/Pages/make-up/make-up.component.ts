import { MakeUpService } from './../../Services/make-up.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-up',
  templateUrl: './make-up.component.html',
  styleUrls: ['./make-up.component.scss']
})
export class MakeUpComponent implements OnInit{
      miMaquillaje?: any[]
      constructor(private maquillajeService: MakeUpService){
        this.maquillajeService.obtenerMaquillaje().subscribe((data:any)=>
        {console.log(data);
        this.miMaquillaje = [...data]
        })
      }

      ngOnInit(): void {
        
      }
}
