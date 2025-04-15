import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommComponentsComponent } from './comm-components.component';

describe('CommComponentsComponent', () => {
  let component: CommComponentsComponent;
  let fixture: ComponentFixture<CommComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
