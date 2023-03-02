import { Component, ViewChildren, QueryList } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HRIS-APP';
  showFiller = false;
  handleClick(){
    console.log('Panel Clicked!');
  }

  expandedPanel: string = "";

  panelClick(panelId: string) {
    if (panelId === this.expandedPanel) {
      this.expandedPanel = "";
    } else {
      this.expandedPanel = panelId;
    }
  }
}
