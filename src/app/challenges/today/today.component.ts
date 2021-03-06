import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
  moduleId: module.id,
})
export class TodayComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

  onEdit(){
  this.router.navigate(['/curr-challenge'], {transition: {name: 'slideLeft'}})
}

}
