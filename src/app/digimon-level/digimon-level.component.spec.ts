import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonLevelComponent } from './digimon-level.component';

describe('DigimonLevelComponent', () => {
  let component: DigimonLevelComponent;
  let fixture: ComponentFixture<DigimonLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
