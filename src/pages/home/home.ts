import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Content) content: Content;

  view: number[] = [700, 300];
  data: any[] = [];
  realtime: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showLegend: boolean;

  constructor() {
    this.data = this.generateData();
  }

  ionViewDidLoad() {
    const width = this.content.getContentDimensions().contentWidth - 50;
    if (width <= 320 ) {
      this.showXAxisLabel = false;
      this.showYAxisLabel = false;
      this.showLegend = false;
    }
    this.view = [width, 300];
  }

  runRealTime() {
    setInterval(() => {
      this.updateData();
    }, 1000);
  }

  updateData() {
    this.data = this.generateData();
  }

  private generateData() {
    return [
      {
        'name': 'Germany',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'United States',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'France',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'United Kingdom',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'Spain',
        'value': Math.floor(10000 + Math.random() * 50000)
      },
      {
        'name': 'Italy',
        'value': Math.floor(10000 + Math.random() * 50000)
      }
    ];
  }

}
