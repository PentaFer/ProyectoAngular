import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaCoponentComponent } from './actualiza-coponent.component';

describe('ActualizaCoponentComponent', () => {
  let component: ActualizaCoponentComponent;
  let fixture: ComponentFixture<ActualizaCoponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaCoponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaCoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
