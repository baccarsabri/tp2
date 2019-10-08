import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TABComponent } from './tab.component';

describe('TABComponent', () => {
  let component: TABComponent;
  let fixture: ComponentFixture<TABComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TABComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
