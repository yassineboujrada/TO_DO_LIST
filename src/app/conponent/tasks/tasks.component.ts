import { Component, OnInit } from '@angular/core';
import {TASK} from '../../TASK'
// import {tasks} from '../../fake_tasks'
import {TaskItemsService} from '../../services/task-items.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : TASK[]=[];
  constructor(private task_service:TaskItemsService) { 

  }

  ngOnInit(): void {
    this.task_service.getTasks().subscribe( (tasks) =>{
      this.tasks=tasks
    });
  }

  on_delete_task(task:TASK){
    this.task_service.deleteTasks(task).subscribe( () =>{
      this.tasks=this.tasks.filter( t=> t.id !== task.id);
    }); 
  }

  on_toggle_task(task:TASK){
    task.reminder = !task.reminder;
    this.task_service.update_task_reminde(task).subscribe(); 
  }

  OnAddTask(task:TASK){
    this.task_service.Add_new_Task(task).subscribe((task) => this.tasks.push(task));
  }
}
