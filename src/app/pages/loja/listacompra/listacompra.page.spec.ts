import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListacompraPage } from './listacompra.page';

describe('ListacompraPage', () => {
  let component: ListacompraPage;
  let fixture: ComponentFixture<ListacompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListacompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
