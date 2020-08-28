import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('slide', { static: false }) slide: IonSlides;
  slider: any;

  //Configuration for each Slider
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  slideOpts1 = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    pager: false
  };


  constructor() {
    //Item object for Nature
    this.slider =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          url: "https://images-americanas.b2w.io/spacey/acom/2020/08/21/DESTAQUE_DESK_HOME-SemanaCasa2020.png"
        },
        {
          url: "https://images-americanas.b2w.io/spacey/acom/2020/08/20/Destaque-Smartphones-deskentrega.png"
        },
        {
          url: "https://images-americanas.b2w.io/spacey/acom/2020/08/21/01-DESTAQUE-DESK-SEMANACASA1.png"
        },
        {
          url: "https://images-americanas.b2w.io/spacey/acom/2020/08/21/02-DESTAQUE-DESK-SEMANACASA.png"
        },
      ]
    };
  }

  public slidesOptions: any ={
    slidesPerView: 3, 
    freeMode: true, 
    initialSlide: 0,
    autoplay: false,
    pager: false};


  public cards : Array<any> = [
    { url:'https://cdn.worldvectorlogo.com/logos/nike-3.svg' },
    { url:'https://http2.mlstatic.com/logo-adidas-vintage-retr-para-camisas-de-futebol-D_NQ_NP_813508-MLB31680448041_082019-F.jpg' },
    { url:'https://logospng.org/download/lojas-americanas/logo-lojas-americanas-2048.png' },
    { url:'https://w7.pngwing.com/pngs/20/136/png-transparent-lamborghini-aventador-car-hennessey-performance-engineering-lamborghini-emblem-logo-car.png' },
    { url:'https://4.bp.blogspot.com/-fEatQC3lnsA/W_Np3huIj0I/AAAAAAABs5A/6f3CBWXn2AMOH4LvB1OAOowaC5y-rEdSgCLcBGAs/s1600/burger%2Blogo.jpg'},
    { url:'https://itaquagardenshopping.com.br/wp-content/uploads/2017/03/MCDONALDS.png'},
    { url:'https://geekpublicitario.com.br/wp-content/uploads/2016/08/novo-logo-subway-blog-gkpb.jpg'},
    { url:'https://patiosaobento.com.br/wp-content/uploads/2018/07/spoleto-logo.jpg'},
    { url:'https://wp-cdn.etiquetaunica.com.br/blog/wp-content/uploads/2018/04/14152647/logo-da-marca-fendi-140120-1024x768.jpg'}
  ];
 
  public newProdutos : Array<any> = [
    { url: 'https://toppng.com/uploads/preview/hamburguer-artesanal-11562913621losmp6qcwo.png'},
    { url: 'https://www.panelinhasdobrasil.com.br/wp-content/uploads/2018/07/Burger_2.png'},
    { url: 'https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/pizzas-png-transparente.png?fit=950%2C768&ssl=1'},
    { url: 'https://mpng.subpng.com/20190624/vrf/kisspng-cupcake-rum-ball-chocolate-brownie-brigadeiro-choc-5d10bb7924deb1.397869871561377657151.jpg'},
    { url: 'https://lh3.googleusercontent.com/proxy/uKZ7eXDPUWALv8vajxqgzrdrexhYpKiXR2x5ovOVvNiPyi-E2aBhwLzEOelu3VfC-NBAj--nRw2th3xWNZ1eWwv8xXqr20HePANa3NKFk8OhyHnJi29s'},
    { url: 'https://www.pngitem.com/pimgs/m/235-2358915_subway-hd-png-download.png'},
    { url: 'https://www.nicepng.com/png/detail/52-522825_hamburguesas-de-burger-king.png'},

  ]


  public entregaGratis : Array<any> = [
    { url:'https://cdn.worldvectorlogo.com/logos/nike-3.svg' },
    { url:'https://http2.mlstatic.com/logo-adidas-vintage-retr-para-camisas-de-futebol-D_NQ_NP_813508-MLB31680448041_082019-F.jpg' },
    { url:'https://logospng.org/download/lojas-americanas/logo-lojas-americanas-2048.png' },
    { url:'https://w7.pngwing.com/pngs/20/136/png-transparent-lamborghini-aventador-car-hennessey-performance-engineering-lamborghini-emblem-logo-car.png' },
    { url:'https://4.bp.blogspot.com/-fEatQC3lnsA/W_Np3huIj0I/AAAAAAABs5A/6f3CBWXn2AMOH4LvB1OAOowaC5y-rEdSgCLcBGAs/s1600/burger%2Blogo.jpg'},
    { url:'https://itaquagardenshopping.com.br/wp-content/uploads/2017/03/MCDONALDS.png'},
    { url:'https://geekpublicitario.com.br/wp-content/uploads/2016/08/novo-logo-subway-blog-gkpb.jpg'},
    { url:'https://patiosaobento.com.br/wp-content/uploads/2018/07/spoleto-logo.jpg'},
    { url:'https://wp-cdn.etiquetaunica.com.br/blog/wp-content/uploads/2018/04/14152647/logo-da-marca-fendi-140120-1024x768.jpg'}

  ]


    
  public lojasAbertas : Array<any> = [
    { url:'https://cdn.worldvectorlogo.com/logos/nike-3.svg' },
    { url:'https://http2.mlstatic.com/logo-adidas-vintage-retr-para-camisas-de-futebol-D_NQ_NP_813508-MLB31680448041_082019-F.jpg' },
    { url:'https://logospng.org/download/lojas-americanas/logo-lojas-americanas-2048.png' },
    { url:'https://w7.pngwing.com/pngs/20/136/png-transparent-lamborghini-aventador-car-hennessey-performance-engineering-lamborghini-emblem-logo-car.png' },
    { url:'https://4.bp.blogspot.com/-fEatQC3lnsA/W_Np3huIj0I/AAAAAAABs5A/6f3CBWXn2AMOH4LvB1OAOowaC5y-rEdSgCLcBGAs/s1600/burger%2Blogo.jpg'},
    { url:'https://itaquagardenshopping.com.br/wp-content/uploads/2017/03/MCDONALDS.png'},
    { url:'https://geekpublicitario.com.br/wp-content/uploads/2016/08/novo-logo-subway-blog-gkpb.jpg'},
    { url:'https://patiosaobento.com.br/wp-content/uploads/2018/07/spoleto-logo.jpg'},
    { url:'https://wp-cdn.etiquetaunica.com.br/blog/wp-content/uploads/2018/04/14152647/logo-da-marca-fendi-140120-1024x768.jpg'}

  ]
  
  public maisCurtidas : Array<any> = [
    { url:'https://cdn.worldvectorlogo.com/logos/nike-3.svg' },
    { url:'https://http2.mlstatic.com/logo-adidas-vintage-retr-para-camisas-de-futebol-D_NQ_NP_813508-MLB31680448041_082019-F.jpg' },
    { url:'https://logospng.org/download/lojas-americanas/logo-lojas-americanas-2048.png' },
    { url:'https://w7.pngwing.com/pngs/20/136/png-transparent-lamborghini-aventador-car-hennessey-performance-engineering-lamborghini-emblem-logo-car.png' },
    { url:'https://4.bp.blogspot.com/-fEatQC3lnsA/W_Np3huIj0I/AAAAAAABs5A/6f3CBWXn2AMOH4LvB1OAOowaC5y-rEdSgCLcBGAs/s1600/burger%2Blogo.jpg'},
    { url:'https://itaquagardenshopping.com.br/wp-content/uploads/2017/03/MCDONALDS.png'},
    { url:'https://geekpublicitario.com.br/wp-content/uploads/2016/08/novo-logo-subway-blog-gkpb.jpg'},
    { url:'https://patiosaobento.com.br/wp-content/uploads/2018/07/spoleto-logo.jpg'},
    { url:'https://wp-cdn.etiquetaunica.com.br/blog/wp-content/uploads/2018/04/14152647/logo-da-marca-fendi-140120-1024x768.jpg'}

  ]
  

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(1000).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(1000).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
