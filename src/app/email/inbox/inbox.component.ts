import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.sass'],
    imports: [RouterLink]
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
