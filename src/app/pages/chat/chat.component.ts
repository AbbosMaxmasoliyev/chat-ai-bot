import { MarkdownWord } from './../../../../node_modules/mermaid/dist/rendering-util/types.d';
import { Component, inject, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProfileAvatarComponent } from "../../components/profile-avatar/profile-avatar.component";
import { ListboxComponent } from "../../components/listbox/listbox.component";
import { SuggestionCardComponent } from "../../components/suggestion-card/suggestion-card.component";
import { InputPromptComponent } from "../../components/input-prompt/input-prompt.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CommonModule, Location } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  imports: [MatIconModule, ProfileAvatarComponent, ListboxComponent, SuggestionCardComponent, InputPromptComponent, ScrollPanelModule, CommonModule, MarkdownModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  location = inject(Location)
  messages: { role: 'user' | 'bot', content: string }[] = [];
  markdown = `
    # Salom, ngx-markdown!

    Bu **markdown** formatidagi matn.

    - Ro'yxat elementi 1
    - Ro'yxat elementi 2
    * One item
    * Another item
      * A sub-item
        * A deeper item
      * Back in sub-item land
      * And back at the main level
    [Google](https://www.google.com)
  `;

  goBack() {
    this.location.back()
  }
  onPromptReceived(prompt: string): void {
    if (!prompt.trim()) return;

    this.messages.push({ role: 'user', content: prompt });

    // Simulated AI response — real integratsiya uchun API chaqirish kerak
    setTimeout(() => {
      this.messages.push({
        role: 'bot',
        content: `AI javobi: “${prompt}” savolingiz uchun rahmat!`
      });
    }, 1000);
  }
}
