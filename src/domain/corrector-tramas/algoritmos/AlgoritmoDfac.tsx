import { Corrector } from "../interface/Corrector";
import { IParser } from "../interface/IParser";

class AlgoritmoDfac implements IParser, Corrector {
  private parser: IParser;

  parsearEntrada(texto: string): string[][] {
    return this.parser.parsearEntrada(texto);
  }
  parsearSalida(matrix: string[][]): string {
    return this.parser.parsearSalida(matrix);
  }

  constructor(parser: IParser) {
    this.parser = parser;
  }
  public corregir(contenido: string[][]): string[][] {
    console.log("[+] corregir desde AlgoritmoDfac");
    return contenido;
  }
}
export default AlgoritmoDfac;
