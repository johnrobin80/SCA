import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.sass'],
    imports: [RouterLink]
})
export class AvatarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
