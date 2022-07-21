import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), //isso finaliza a inscrição do rxjs pois a chamada da API só é necessária uma única vez
      delay(2000),
      tap(courses => console.log(courses))
    )
  }
}
