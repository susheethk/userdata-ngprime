import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagethreeComponent } from './pagethree.component';

describe('PagethreeComponent', () => {
  let component: PagethreeComponent;
  let fixture: ComponentFixture<PagethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagethreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
