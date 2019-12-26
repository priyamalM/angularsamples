import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-directive',
  templateUrl: './test-directive.component.html',
  styleUrls: ['./test-directive.component.scss']
})
export class TestDirectiveComponent implements OnInit {

  constructor() { }

  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;

  ngOnInit() {
  }

}
