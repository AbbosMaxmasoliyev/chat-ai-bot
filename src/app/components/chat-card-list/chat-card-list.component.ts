import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TimeAgoPipe } from '../../shared/pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-card-list',
  imports: [CommonModule, TimeAgoPipe, RouterLink],
  templateUrl: './chat-card-list.component.html',
  styleUrl: './chat-card-list.component.scss',
  providers: [DatePipe],

})
export class ChatCardListComponent {

  myDate = "11-12-2024"
  cards = [
    { title: 'Who is Pope Francis?', content: 'As of January 2022, Pope Francis...' },
    { title: 'Tell me the story...', content: 'Once upon a time in Meadowville...' },
    { title: 'Stiralnaya mashina Artel...', content: 'Kuda sypat poroshok v mashinku?' },
    { title: 'What can I do to concentrate?', content: 'Try effective study habits like...' },
    { title: 'What do you know about the French Revolution?', content: 'The French Revolution was a period...' },
    { title: 'Who is Pope Francis?', content: 'As of January 2022, Pope Francis...' },
  ];
}
