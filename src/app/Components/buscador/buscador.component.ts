import { HttpClient, HttpParams } from '@angular/common/http';
import { PrendasService } from './../../Services/prendas.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit{
  
  constructor(){
    
  }
  
  ngOnInit(){
    this.buscador.valueChanges.pipe(debounceTime(500))
    .subscribe(value => this.buscadorEmitter.emit(value))
  }
  
  buscador = new FormControl('');

  @Output('buscador') buscadorEmitter = new EventEmitter<string>();
}
