import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import{UiService} from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Manager';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private _uiService:UiService, private _router:Router) { 
    this.subscription = this._uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('toggle');
    this._uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this._router.url === route;
  }

}
