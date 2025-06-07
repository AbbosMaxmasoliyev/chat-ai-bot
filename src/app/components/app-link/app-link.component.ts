import { Component, input, Input } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [RouterLinkActive, RouterModule],
  templateUrl: './app-link.component.html',
})
export class AppLinkComponent {
  link = input<string>('');
  text = input<string>('Кнопка');
  borderRadius = input<string>('2xl'); // Tailwind: 'rounded-2xl'
  background = input<string>('bg-white');
  textColor = input<string>('text-black');
  padding = input<string>('px-6 py-3');
  fontSize = input<string>('text-base');
}
