import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPrendaComponent } from './nueva-prenda.component';

describe('NuevaPrendaComponent', () => {
  let component: NuevaPrendaComponent;
  let fixture: ComponentFixture<NuevaPrendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPrendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
