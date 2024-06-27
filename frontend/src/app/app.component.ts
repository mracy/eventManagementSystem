// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FormsModule, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    title: string = '';
    date: string = '';
    location: string = 'Select';
    remind: boolean = false;
    isEditing: boolean = false;
    eventId: string = '';
    eventsArray: any[] = [];

    constructor(private apiService: 
        ApiService, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.apiService.getAllEvents().subscribe((res) => {
            this.eventsArray = res;
        });
    }

    onAddClick(): void {
        const data = {
            title: this.title,
            date: this.date,
            location: this.location,
            remind: this.remind,
        };
        this.apiService.addEvent(data).subscribe((res) => {
            this.eventsArray.push(res);
            this.clear();
            this.toastr.success('New event added successfully', 'Success!');
        });
    }

    onEditEvent(id: string): void {
        const index = this.eventsArray
        .findIndex((ev) => ev._id === id);
        const event = this.eventsArray[index];
        this.title = event['title'];
        this.location = event['location'];
        this.date = new Date(event['date'])
        .toISOString().slice(0, 10);
        this.remind = event['remind'];
        this.isEditing = true;
        this.eventId = id;
    }

    clear(): void {
        this.title = '';
        this.date = '';
        this.location = 'Select';
        this.remind = false;
    }

    onUpdateClick(): void {
        const data = {
            title: this.title,
            date: this.date,
            location: this.location,
            remind: this.remind,
        };
        this.apiService.updateEvent(this.eventId, data).subscribe((res) => {
            this.eventsArray = this.eventsArray.filter(
                (ev) => ev._id !== this.eventId
            );
            this.eventsArray.push(res);
            this.eventId = '';
            this.isEditing = false;
            this.toastr.success('Event updated successfully', 'Success!');
            this.clear();
        });
    }

    onDeleteEvent(id: string): void {
        this.apiService.deleteEvent(id).subscribe((res) => {
            this.eventsArray = this.eventsArray.filter((ev) => ev._id !== id);
            this.toastr.success('Event deleted successfully!', 'Success!');
        });
    }
}
