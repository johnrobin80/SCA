import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.sass'],
    imports: [FormsModule]
})
export class ForgotComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
