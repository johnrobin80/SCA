import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.sass'],
    imports: [FormsModule]
})
export class ResetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
