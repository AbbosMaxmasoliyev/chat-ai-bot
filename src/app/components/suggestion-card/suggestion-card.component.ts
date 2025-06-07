import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-suggestion-card',
  imports: [MatIconModule],
  templateUrl: './suggestion-card.component.html',
  styleUrl: './suggestion-card.component.scss'
})
export class SuggestionCardComponent {
  @Input() contentTitle!: string
  @Input() subtitle!: string
}
