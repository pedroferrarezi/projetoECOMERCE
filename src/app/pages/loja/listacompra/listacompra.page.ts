import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacompra',
  templateUrl: './listacompra.page.html',
  styleUrls: ['./listacompra.page.scss'],
})
export class ListacompraPage implements OnInit {

  public newProdutos : Array<any> = [
    { url: 'https://toppng.com/uploads/preview/hamburguer-artesanal-11562913621losmp6qcwo.png'}
  ]
  public newProdutos1 : Array<any> = [
    { url: 'https://multarte.com.br/wp-content/uploads/2019/03/pizza-png-fundo-transparente16.png'}
  ]
  
  public newProdutos2 : Array<any> = [
    { url: 'https://w7.pngwing.com/pngs/473/736/png-transparent-hd-fries-food-kfc-mcdonalds.png'}
  ]

  constructor() { 
    
  }

  ngOnInit() {
  }

}
