import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  public name = 'Du Truong Hay';
  public email = 'haycaibat123@gmail.com';
  public marks = 1;
  public password = '';
  public students = [
    {
      name: 'Thịnh',
      email: 'thinh123@gmail.com',
      password: 'hay123',
      marks: 9.7,
    },
    { name: 'Hay', email: 'hay123@gmail.com', password: 'hay123', marks: 1.9 },
    { name: 'Như', email: 'nhu123@gmail.com', password: 'nhu123', marks: 9.9 },
    { name: 'Đạt', email: 'dat123@gmail.com', password: 'dat123', marks: 6.9 },
  ];

  constructor(private messageService: MessageService) {}

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }

  showInfo(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: message,
    });
  }

  showWarn(message: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: message,
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }

  ngOnInit(): void {
    console.log('students', this.students);
  }

  public reset(): void {
    console.log('submit form');
    this.email = '';
    this.marks = 0;
  }
  public add(): void {
    if (this.name && this.email && this.marks && this.password) {
      const newStudent = {
        name: this.name,
        email: this.email,
        marks: this.marks,
        password: this.password,
      };

      this.students.push(newStudent);
      this.reset();
      this.showSuccess('Add new success');
    } else {
      this.showError('Add new error');
    }
  }
}
