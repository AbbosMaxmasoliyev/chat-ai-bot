import { Component, computed, signal } from '@angular/core';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from "../../components/input/input.component";
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from "../../components/button/button.component";
import { ChatCardListComponent } from "../../components/chat-card-list/chat-card-list.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CategoryCardComponent, CommonModule, InputComponent, MatIconModule, ButtonComponent, ChatCardListComponent],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private activeType = signal<'category' | 'chat'>('category');

  selectActive(type: 'category' | 'chat') {
    this.activeType.set(type);
  }

  activeButton = computed(() => this.activeType());

  handleButtonClick = (type: 'category' | 'chat') => () => {
    console.log(type)
    this.selectActive(type)
  };

  categories = [
    { title: 'Мини-печи', image: '/images/pech.jfif' },
    { title: 'Пылесосы', image: '/images/dazmol.jfif' },
    { title: 'Мелкая бытовая техника', image: '/images/dazmol.jfif' },
    { title: 'Плиты', image: '/images/muzlatgich.png' },
    { title: 'Телефоны', image: '/images/pech.jfif' },
    { title: 'Стиральные машины', image: '/images/pech.jfif' },
    { title: 'Холодильники', image: '/images/dazmol.jfif' },
    { title: 'Телевизоры', image: '/images/pech.jfif' },
    { title: 'Muzlatgich', image: '/images/muzlatgich.png' },
  ];



}
