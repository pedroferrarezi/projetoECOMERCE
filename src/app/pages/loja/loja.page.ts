import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage implements OnInit {

  selectTabs: any;

  public promocao : Array<any> = [
    { url: 'https://toppng.com/uploads/preview/hamburguer-artesanal-11562913621losmp6qcwo.png'},
  ]
  public promocao2 : Array<any> = [
    { url: 'https://toppng.com/uploads/preview/hamburguer-artesanal-11562913621losmp6qcwo.png'},
  ]
  public promocao3 : Array<any> = [
    { url: 'https://toppng.com/uploads/preview/hamburguer-artesanal-11562913621losmp6qcwo.png'},
  ]



  constructor() { }

  ngOnInit() {
  }

}
