import {Component, OnInit} from '@angular/core';
import data from '../data/data.json';


interface ICard {
  iconHeader: string;
  activity: string;
  current: number;
  previous: number;
  color: string;
}

interface IInputData {
  timeframes: any;
  title: string;
}

enum FrequencyEnum {
  Daily = 'daily',
  Weekly = 'weekly',
  Monthly = 'monthly'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Time tracking dashboard';
  cards: ICard[] = [];
  frequenciesKeys: string[] = ['daily', 'monthly', 'weekly'];
  colors: string[] = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)'
  ];
  frequency = FrequencyEnum;
  ngOnInit(): void {
    this.drawCards();
  }

  drawCards(key: string = this.frequenciesKeys[0]) {
    this.cards = [];
    let icon;

    (data as Array<IInputData>)?.forEach((value: IInputData, index) => {
      icon = (value.title.replace(' ', '-')).toLowerCase();
      this.cards.push({
        activity: value.title,
        current: value.timeframes[key]['current'],
        previous: value.timeframes[key]['previous'],
        iconHeader: icon,
        color: this.colors[index]
      });
    });
  }
}
