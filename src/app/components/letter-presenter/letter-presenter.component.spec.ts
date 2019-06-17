import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DemoMaterialModule} from '../../material-module';
import { LetterPresenterComponent } from './letter-presenter.component';

describe('LetterPresenterComponent', () => {
  let component: LetterPresenterComponent;
  let fixture: ComponentFixture<LetterPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterPresenterComponent ],
      imports: [FlexLayoutModule, DemoMaterialModule]
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
