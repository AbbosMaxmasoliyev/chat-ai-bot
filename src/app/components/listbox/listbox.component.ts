import { Component, OnInit } from '@angular/core';
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
  cities!: City[];

  selectedCity!: City;

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
