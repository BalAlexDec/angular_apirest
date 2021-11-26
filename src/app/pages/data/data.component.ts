import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';
import { CiudadesService } from 'src/app/shared/ciudades.service';
import { Discos } from 'src/app/models/discos';
import { DiscosService } from 'src/app/shared/discos.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public disco !: Discos;
  public discos !: Discos[];

  constructor(private apiService: DiscosService) {
    //this.discos = this.apiService.mostrarallDiscos();
    this.discos = [];
    this.mostrarallDiscos();
  }

  mostrarallDiscos(){
    this.apiService.getallDiscos().subscribe((data:any) =>{
      console.log(data);
      //mostrar =true;
      this.discos = data;
    })
  }
  ngOnInit(): void {
  }

}
