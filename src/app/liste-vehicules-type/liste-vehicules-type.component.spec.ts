import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVehiculesTypeComponent } from './liste-vehicules-type.component';

describe('ListeVehiculesTypeComponent', () => {
  let component: ListeVehiculesTypeComponent;
  let fixture: ComponentFixture<ListeVehiculesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVehiculesTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeVehiculesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
