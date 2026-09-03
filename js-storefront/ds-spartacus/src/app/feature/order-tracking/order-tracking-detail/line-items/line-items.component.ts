import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'vs-line-items',
  templateUrl: './line-items.component.html',
  styleUrls: ['./line-items.component.scss'],
})
export class LineItemsComponent implements OnInit {
  @Input() expandAll;
  @Input() orderTrackingResponse;

  ngOnInit(): void {}
}
