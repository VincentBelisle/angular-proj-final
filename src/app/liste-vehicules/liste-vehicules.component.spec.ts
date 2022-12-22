import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVehiculesComponent } from './liste-vehicules.component';

describe('ListeVehiculesComponent', () => {
  let component: ListeVehiculesComponent;
  let fixture: ComponentFixture<ListeVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVehiculesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
