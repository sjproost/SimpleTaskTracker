import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from 'src/app/services/ui.service';
import {Task} from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private _uiService: UiService) { 
    this.subscription = this._uiService.
    onToggle().
    subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  clearForm(): void {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
  
  onSubmit(): void {
    if(!this.text || !this.day) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    console.log(newTask.text);
    this.onAddTask.emit(newTask);
    this.clearForm();
  }

}
