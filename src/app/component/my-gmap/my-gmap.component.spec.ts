import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGmapComponent } from './my-gmap.component';

describe('MyGmapComponent', () => {
  let component: MyGmapComponent;
  let fixture: ComponentFixture<MyGmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
