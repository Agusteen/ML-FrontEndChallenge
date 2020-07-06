import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.scss']
})
export class CategoriesNavComponent implements OnInit {
  
  @Input() categories: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
