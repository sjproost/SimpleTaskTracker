import { Component, Input, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input()
  tasks: Task[] = [];

  constructor(private _taskServices: TaskService) { }

  ngOnInit(): void {
    this._taskServices.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this._taskServices.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter( t => t.id !== task.id)));
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this._taskServices.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task): void {
    this._taskServices.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

}
