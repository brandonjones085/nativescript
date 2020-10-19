import { Component, Input } from '@angular/core';
import { isAndroid } from "tns-core-modules/platform";


import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

declare var android: any; 

@Component({
  selector: 'action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
  moduleId: module.id
})
export class ActionBarComponent {

  @Input() title: string
  @Input() showBackButton = true; 

  constructor(
    private page: Page, private router: RouterExtensions
  ) {}

  get canGoBack(){
    return this.router.canGoBack() && this.showBackButton; 
  }

  onGoBack(){
    this.router.backToPreviousPage(); 
  }

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
