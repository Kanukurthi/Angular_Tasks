import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionComponent } from './dependency-injection.component';

describe('DependencyInjectionComponent', () => {
  let component: DependencyInjectionComponent;
  let fixture: ComponentFixture<DependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependencyInjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
