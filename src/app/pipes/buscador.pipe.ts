import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(lista:any[], texto: string): any[] {
    console.log(texto)
    if(!texto) return lista
    return lista.filter(ropa => ropa.name.includes(texto.toUpperCase))
  }

}
