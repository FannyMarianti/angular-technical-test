import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'technical-test';

  articles: any[] = [];

  filter = {
    q: ""!
  };

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((response: any) => {
      this.articles = response.articles;
    });
  }

  // filterData() {
  //   this.router.navigate(
  //     [],
  //     {
  //       queryParams: this.filter,
  //       queryParamsHandling: 'merge', // remove to replace all query params by provided
  //     });

  //   this.getData(this.filter);
  // }
}

