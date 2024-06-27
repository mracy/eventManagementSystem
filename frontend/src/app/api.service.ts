// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getAllEvents(): Observable<any> {
        return this.http.get<any>('http://localhost:4000/api/getAll');
    }

    getEvent(id: number, data: any): Observable<any> {
        return this.http.post<any>('http://localhost:4000/api/get/' + id, data);
    }

    addEvent(data: any): Observable<any> {
        return this.http.post<any>('http://localhost:4000/api/add', data);
    }

    updateEvent(id: string, data: any): Observable<any> {
        return this.http.put<any>('http://localhost:4000/api/update/' + id, data);
    }

    deleteEvent(id: string): Observable<any> {
        return this.http.delete<any>('http://localhost:4000/api/delete/' + id);
    }
}
