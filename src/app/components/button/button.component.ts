import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  miestaiTusti: string[] = [''];

  ngOnInit(): void {}

  @Output() onClick() {
    console.log('deleting deleting...');
  }
}
