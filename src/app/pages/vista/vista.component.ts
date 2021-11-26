import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadesService } from 'src/app/shared/ciudades.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Discos } from 'src/app/models/discos';
import { DiscosService } from 'src/app/shared/discos.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  public mostrar : Boolean = false;
  public disco !: Discos;

  constructor(private apiService: DiscosService, private _snackBar: MatSnackBar) {
    //this.mostrardiscos("4");
  }

  mostrardiscos(id:string){
    console.log(id);
    this.apiService.getDiscos(parseInt(id)).subscribe((data:any)=>{
      console.log(data);
      this.disco = data[0];
      this.mostrar = true;
    })
  }

  /*public buscarPorCodigo(codigoCiudad : string){
    if (codigoCiudad.length == 3){
      let citie = this.ciudadeService.getOne(codigoCiudad);
      if (citie !== null){
        this.ciudad = new Ciudad(citie.nombre, citie.pais, citie.codigo);
        this.mostrar = true;
       } else {
        // this.codigoBuscado = codigoCiudad;
        this.error (codigoCiudad);
        this.mostrar = false;
      }
    } else {
      this.error (codigoCiudad);
    }
  }

  private error(message: string) {
    if (message.length == 3){
      message = "No hay Discos" + message.toUpperCase();
      this._snackBar.open(message, 'Cerrar');
    } else {
      message = "El código tiene que ser de tres letras mayúsculas";
      this._snackBar.open(message, 'Cerrar');
    }
  }
*/
  ngOnInit(): void {
  }

}

