import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasHomeComponent } from './pessoas-home.component';

describe('PessoasHomeComponent', () => {
  let component: PessoasHomeComponent;
  let fixture: ComponentFixture<PessoasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
