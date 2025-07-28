import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUnderline } from './header-underline';

describe('HeaderUnderline', () => {
  let component: HeaderUnderline;
  let fixture: ComponentFixture<HeaderUnderline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderUnderline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUnderline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
