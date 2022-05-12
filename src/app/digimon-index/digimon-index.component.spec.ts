import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonIndexComponent } from './digimon-index.component';

describe('DigimonIndexComponent', () => {
  let component: DigimonIndexComponent;
  let fixture: ComponentFixture<DigimonIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
