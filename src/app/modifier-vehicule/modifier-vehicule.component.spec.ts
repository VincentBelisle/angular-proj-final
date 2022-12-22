import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVehiculeComponent } from './modifier-vehicule.component';

describe('ModifierVehiculeComponent', () => {
  let component: ModifierVehiculeComponent;
  let fixture: ComponentFixture<ModifierVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierVehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
