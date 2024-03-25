import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysLayoutComponent } from './keys-layout.component';

describe('KeysLayoutComponent', () => {
  let component: KeysLayoutComponent;
  let fixture: ComponentFixture<KeysLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeysLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeysLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
