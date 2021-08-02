import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFooterComponent } from './album-footer.component';

describe('AlbumFooterComponent', () => {
  let component: AlbumFooterComponent;
  let fixture: ComponentFixture<AlbumFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
