import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css']
})
export class Myc05Component implements OnInit {

  uname = 'ding dang'
  age = 18

  constructor() { }

  ngOnInit(): void {
  }

}
