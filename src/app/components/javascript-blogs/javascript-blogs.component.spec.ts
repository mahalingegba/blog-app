import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptBlogsComponent } from './javascript-blogs.component';

describe('JavascriptBlogsComponent', () => {
  let component: JavascriptBlogsComponent;
  let fixture: ComponentFixture<JavascriptBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptBlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
