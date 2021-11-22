import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesConfirmDialogComponent } from './heroes-confirm-dialog.component';

describe('HeroesConfirmDialogComponent', () => {
  let component: HeroesConfirmDialogComponent;
  let fixture: ComponentFixture<HeroesConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
