import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCardListComponent } from './chat-card-list.component';

describe('ChatCardListComponent', () => {
  let component: ChatCardListComponent;
  let fixture: ComponentFixture<ChatCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
