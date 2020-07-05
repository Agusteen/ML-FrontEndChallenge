import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent {

  constructor(private router: Router) { }

  search(form: NgForm): void {
    if(!form.valid) return;
    var query: string = form.value.query;    
    this.router.navigate(['/items'], { queryParams: {search: query} });     
  }

}
