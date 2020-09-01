import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage {

  @ViewChild('slide', { static: false }) slide: IonSlides;
  slider: any;

  //Configuration for each Slider
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };


  constructor() {
    //Item object for Nature
    this.slider =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          url: "https://images.lojanike.com.br/860x860/produto/246367_2175929_20200519114949.jpg"
        },
        {
          url: "https://images.lojanike.com.br/860x860/produto/246367_2175946_20200519114949.jpg"
        },
        {
          url: "https://images.lojanike.com.br/860x860/produto/246367_2175963_20200519114949.jpg"
        },
      ]
    };
  }
  

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
