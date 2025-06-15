import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-listbox',
  imports: [FormsModule, SelectButton, ScrollPanelModule],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.scss',

})
export class ListboxComponent implements OnInit {
  @ViewChild("containerScroll", { static: false }) containerScroll?: ElementRef<HTMLDivElement>;

  cities!: City[];
  selectedCity!: City;
  isDragging = false;
  startX = 0;
  scrollLeft = 0;
  onMouseDown(event: MouseEvent) {
    if (!this.containerScroll) return;

    this.isDragging = true;
    const container = this.containerScroll.nativeElement;

    this.startX = event.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;

    const onMouseMove = (e: MouseEvent) => {
      if (!this.isDragging) return;

      const x = e.pageX - container.offsetLeft;
      const walk = (x - this.startX) * 1; // 1 — harakat tezligi
      container.scrollLeft = this.scrollLeft - walk;
    };

    const onMouseUp = () => {
      this.isDragging = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }
  ngOnInit() {

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Istanbul', code: 'IST1' },
      { name: 'Istanbul', code: 'IST2' },
      { name: 'Istanbul', code: 'IST3' },
      { name: 'Istanbul', code: 'IST4' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
