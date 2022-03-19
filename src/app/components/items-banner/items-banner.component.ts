import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Item } from '../item/item';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {
  @Input() items: Item[] = [];
  @Input() title: string = '';
}
