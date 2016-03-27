import {Component} from "angular2/core";
import {FaturaRepository} from "./FaturaRepository";

@Component({
  selector: 'faturas',
  template: require('./faturas.html'),
  styles: [require('./faturas.css')],
  providers: [FaturaRepository]
})
export class Faturas {

  faturas:any[] = [];

  constructor(private faturaRepository:FaturaRepository) {
    FaturaRepository.getAll().subscribe((docs) => {
      this.faturas = docs;
    });
  }

}
