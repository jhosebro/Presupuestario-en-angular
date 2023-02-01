import { Egreso } from "./egreso.model";


export class EgresoServicio{
  egresos: Egreso[] = [
    new Egreso("Moto", 250000),
    new Egreso("Banco", 231400)
  ]

  eliminar(egreso: Egreso){
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
