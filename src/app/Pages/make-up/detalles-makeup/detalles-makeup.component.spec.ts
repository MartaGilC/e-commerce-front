import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMakeupComponent } from './detalles-makeup.component';

describe('DetallesMakeupComponent', () => {
  let component: DetallesMakeupComponent;
  let fixture: ComponentFixture<DetallesMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesMakeupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
