import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBookPageComponent } from './find-book-page.component';

describe('FindBookPageComponent', () => {
  let component: FindBookPageComponent;
  let fixture: ComponentFixture<FindBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindBookPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FindBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
