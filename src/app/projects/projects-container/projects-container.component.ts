import { Component, OnInit } from '@angular/core';
import {PROJECTS} from '../shared/mock-projects';
import {Project} from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent implements OnInit {
  projects: Project[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.list().subscribe(data => {this.projects = data; });
  }


}
