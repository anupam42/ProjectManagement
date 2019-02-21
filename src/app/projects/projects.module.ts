import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailComponent } from 'src/app/projects/project-detail/project-detail.component';
import { ProjectDetailContainerComponent } from 'src/app/projects/project-detail-container/project-detail-container.component';

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule, ReactiveFormsModule],
  declarations: [
    ProjectsContainerComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    ProjectDetailComponent,
    ProjectDetailContainerComponent
  ],
  exports: [ProjectsContainerComponent]
})
export class ProjectsModule {}
