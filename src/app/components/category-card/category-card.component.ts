// category-card.component.ts
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  title = input<string>("");
  image = input<string>("");
}
