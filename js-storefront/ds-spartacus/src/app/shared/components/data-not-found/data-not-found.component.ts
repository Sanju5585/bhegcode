import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const window: any;

@Component({
  standalone: false,
  selector: 'app-data-not-found',
  templateUrl: './data-not-found.component.html',
  styleUrls: ['./data-not-found.component.css'],
})
export class DataNotFoundComponent implements OnInit {
  public type: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    window.scrollTo(0, 0);
  }
}
