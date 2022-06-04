import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {TASK} from '../../TASK';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!:string;
  day!:string;
  reminder:boolean=false;

  @Output() add_Task : EventEmitter<TASK>=new EventEmitter();
  showAddTask!:boolean;
  subscription:Subscription;


  constructor(private serv:UiService) { 
    this.subscription=this.serv.on_toggle().subscribe( (val) => (this.showAddTask = val) )
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    if(!this.text){
      alert('fill data');
      return;
    }
    console.log('hhh')
    const new_task_info:TASK={
      text:this.text,
      day:this.day,
      reminder:this.reminder,
    };

    this.add_Task.emit(new_task_info);

    this.text='';
    this.day='';
    this.reminder=false;

  }

}
