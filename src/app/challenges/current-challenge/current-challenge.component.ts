import { Component, ViewContainerRef } from '@angular/core';
import { isAndroid } from "tns-core-modules/platform";
import { Page } from 'tns-core-modules/ui/page'

declare var android: any; 

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
  moduleId: module.id
})
export class CurrentChallengeComponent {
  constructor(
    private page: Page
  ) {}

  onLoadedActionBar(){
    if(isAndroid){
      const androidToolbar = this.page.actionBar.nativeView; 
      const backButton = androidToolbar.getNavigationIcon(); 
      if(backButton){
        backButton.setColorFilter(android.graphics.Color.parseColor('#171717'), (<any>android.graphics).PorterDuff.Mode.SRC_ATOP)
      }
    }
  }

}