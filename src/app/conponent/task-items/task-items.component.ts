import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {TASK} from '../../TASK'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {
  @Input() task! :TASK;
  @Output() delete_task : EventEmitter<TASK> = new EventEmitter();
  @Output() On_toggle: EventEmitter<TASK>=new EventEmitter();

  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  Drop_task(e:TASK):void{
    // console.log(gg);
    this.delete_task.emit(e)
  }

  toggle(e:TASK){
    this.On_toggle.emit(e);
  }
}
