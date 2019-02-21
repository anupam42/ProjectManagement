import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import { PROJECTS } from './mock-projects';
import { Project } from './project.model';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { error } from 'selenium-webdriver';
import { catchError} from 'rxjs/operators';
import { delay } from 'rxjs/internal/operators/delay';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = environment.backendUrl + '/projects/';
  constructor(private http: HttpClient) { }

  list(): Observable<Project[]> {
    // return of(PROJECTS);
    return this.http.get<Project[]>(this.projectsUrl).pipe
    ( delay(2000), catchError((errors: HttpErrorResponse) => {
      console.log(errors);
      return throwError('An error occured loading the projects');
    })
    );
  }

  put(project: Project): Observable<Project> {
    const url = this.projectsUrl + project.id;
    return this.http.put<Project>(url, project, httpOptions).pipe(
      catchError(( errors: HttpErrorResponse) => {
        console.log(errors);
        return throwError('An error occured updating the projects');
      })
    );
  }

  find(id: number): Observable<Project> {
    const url = this.projectsUrl + id;
    return this.http.get<Project>(url).pipe(
      catchError(( errors: HttpErrorResponse) => {
        console.log(errors);
        return throwError('An error occured loading the projects');
      })
    );
  }
}

