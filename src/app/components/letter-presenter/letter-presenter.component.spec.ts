import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterPresenterComponent } from './letter-presenter.component';

describe('LetterPresenterComponent', () => {
  let component: LetterPresenterComponent;
  let fixture: ComponentFixture<LetterPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
