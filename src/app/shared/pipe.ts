import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(value: string | Date): string {
    if (!value) return '';

    const now = new Date();
    const date = new Date(value);
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return 'Today';
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

    // 7 kundan ko‘p bo‘lsa — datePipe bilan formatlash
    return this.datePipe.transform(date, 'dd.MM.yyyy') || '';
  }
}
