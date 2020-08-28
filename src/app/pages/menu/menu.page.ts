import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


  public slidesOptions: any ={slidesPerView: 3, freeMode: true};


  
  novoNome: any;
  name: any;
  photo: any;

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    // {
    //   title: 'Editar',
    //   icon: 'create-outline',
    //   open: false,
    //   children: [
    //     {
    //       title: 'Dispositivo',
    //       url: '/menu/edit-device-list',
    //       icon: 'hardware-chip'
    //     },
    //     {
    //       title: 'Cômodo',
    //       url: '/menu/edit-room-list',
    //       icon: 'home'
    //     }
    //   ]
    // },

  ];

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }


  // Função para aparecer opções ao clicar no usuário
  async showOptions() {
    // Cria um actionSheet
    const actionSheet = await this.actionSheetCtrl.create({
      // Header com nome 'Opções'
      header: 'Opções',
      // Gera botões
      buttons: [
        {
          text: 'Alterar Nome',
          icon: 'person',
          handler: () => {
            this.alterarNome();
          }
        },
        {
          text: 'Logout',
          icon: 'power',
          role: 'destructive',
          // Quando o Logout é acionado ele remove o usuário do local storage e redireciona para a página de login
          handler: () => {
            //this.authService.SignOut();
          }
        }, {
          // Botão para cancelar
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        }]
    });
    // Aguarda o actionSheet carregar antes de mostrar
    await actionSheet.present();
  }

  // Funcão para aparecer o alert com o input que irá receber o novo nome do usuário.
  async alterarNome() {
    // Cria um alert
    const alert = await this.alertCtrl.create({
      // Header com nome 'Novo Nome'.
      header: 'Novo Nome',
      // Gera inputs
      inputs: [
        {
          name: 'new-name',
          id: 'newname',
          placeholder: 'Escreva um novo nome',
          value: this.novoNome
        },
      ],
      // Gera botões
      buttons: [
        {
          // Botão para cancelar
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: data => {
            // if apenas para saber se o input não está vázio.
            if ((document.getElementById('newname') as HTMLInputElement).value !== '') {
              // this.nome será = ao que está valor do input com Id 'newname'.
              this.novoNome = (document.getElementById('newname') as HTMLInputElement).value;
              // Puxa a função do ion-toast.
              this.newname();
              // // Função para mudar o nome do usuário.
              // this.userService.updateUserName(this.novoNome, this.user.email);
              // // tslint:disable-next-line: max-line-length
              // localStorage.setItem('user', JSON.stringify(new User(this.user.uid, this.user.email, this.novoNome, this.user.emailVerified, this.user.photoURL)));
              // this.user = JSON.parse(localStorage.getItem('user'));
              // this.name = this.user.displayName;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  // Função para aparecer um ion-toast após salvar o novo nome (perfumaria).
  async newname() {
    const toast = await this.toastController.create({
      header: 'Seu nome foi alterado.',
      duration: 2000
    });
    await toast.present();
  }

}
