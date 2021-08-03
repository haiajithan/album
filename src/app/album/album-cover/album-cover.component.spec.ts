import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpConfigInterceptor } from 'src/app/interceptor/httpconfig.interceptor';
import { AlbumService } from 'src/app/service/album.service';

import { AlbumCoverComponent } from './album-cover.component';

describe('AlbumCoverComponent', () => {
  let component: AlbumCoverComponent;
  let fixture: ComponentFixture<AlbumCoverComponent>;
  let spy: any
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [AlbumCoverComponent],
      // providers: [HttpClient,AlbumService,HttpHandler],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule, TooltipModule.forRoot(),
        HttpClientModule,
        ToastrModule.forRoot(),
      ],
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check get Album Function Should exist', () => {
    spy = spyOn(component, 'getAlbum');
    component.getAlbum();
    expect(spy).toHaveBeenCalled();
  });

  it('Card block should be Available', () => {
    const fixture = TestBed.createComponent(AlbumCoverComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.card')).toBeTruthy;
  });

  

});
