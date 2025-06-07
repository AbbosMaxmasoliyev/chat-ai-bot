import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input',
  imports: [MatIconModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  type = input<string>("");
  icon = input<string>("")
  placeholder = input<string>("");
  @ViewChild('inputContainer') inputContainer!: ElementRef<HTMLDivElement>;

  onFocused(): void {
    this.inputContainer.nativeElement.classList.add("focused")
  }

  onRemoveFocused(): void {
    this.inputContainer.nativeElement.classList.remove("focused")

  }
}
