import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMaquillajeComponent } from './nuevo-maquillaje.component';

describe('NuevoMaquillajeComponent', () => {
  let component: NuevoMaquillajeComponent;
  let fixture: ComponentFixture<NuevoMaquillajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoMaquillajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoMaquillajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
