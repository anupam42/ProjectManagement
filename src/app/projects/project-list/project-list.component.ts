import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Project} from '../shared/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input()
  projects: Project[] = [];
  editingProject: Project;

  @Output()
  saveListItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSave(event:any) {
    this.editingProject = null;
    this.saveListItem.emit({item: event.project});
    console.log("Inside Save in List");
  }

  onEdit(event: any) {
    this.editingProject = event.editingProject;
    console.log(this.editingProject);
  }

  onCancel() {
    this.editingProject = null;
  }

}
