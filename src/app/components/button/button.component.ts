import { CommonModule } from '@angular/common';
import { Component, computed, input, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatIconModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true

})
export class ButtonComponent implements OnInit {
  text = input<string>('Кнопка');
  icon = input<string>('');
  active = input<boolean>(false);
  onClick = input<() => void>(() => {
    console.log("ishladi")
  });


  ngOnInit() {
    console.log(this.onClick()())
  }
  isActive = computed(() => this.active());

}
