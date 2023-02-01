import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
  ingresos: Ingreso[] = [
    new Ingreso("Salario", 537100),
    new Ingreso("Venta H2", 3000000)
  ]

  eliminar(ingreso: Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
}
