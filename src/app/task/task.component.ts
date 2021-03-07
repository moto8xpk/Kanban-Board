import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent  {
  @Input() task?: Task;
  @Output() edit = new EventEmitter<Task>();
  // constructor() { }

  // ngOnInit(): void {
  // }

}
