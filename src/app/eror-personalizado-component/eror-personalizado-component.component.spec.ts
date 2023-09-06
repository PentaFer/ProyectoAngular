import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErorPersonalizadoComponentComponent } from './eror-personalizado-component.component';

describe('ErorPersonalizadoComponentComponent', () => {
  let component: ErorPersonalizadoComponentComponent;
  let fixture: ComponentFixture<ErorPersonalizadoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErorPersonalizadoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErorPersonalizadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
