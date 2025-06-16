// category-card.component.ts
import { Component, input, Input, ViewChild } from '@angular/core';
import { Skeleton, SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-category-card',
  imports: [SkeletonModule],
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  title = input<string>("");
  image = input<string>("");


  loaded = false;

  onLoad(): void {

    this.loaded = true;
  }

  onError(): void {
    this.loaded = false;
  }
}
