import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedpageComponent } from './detailedpage.component';

describe('DetailedpageComponent', () => {
  let component: DetailedpageComponent;
  let fixture: ComponentFixture<DetailedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
