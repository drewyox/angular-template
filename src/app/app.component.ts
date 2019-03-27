import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'crazy-app-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }

  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus courses', 3),
    new Task('Begin brianstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on Github', 2)
  ];

  priorityColor(currentTask){
      if (currentTask.priority === 3){
        return "bg-danger";
      } else if (currentTask.priority === 2) {
        return  "bg-warning";
      } else {
        return "bg-info";
      }
    }
  }
