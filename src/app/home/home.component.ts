import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  public name: string = 'Du Truong Hay';
  public email: string = 'haycaibat123@gmail.com';
  public marks: number = 1;
  public password: string = '';
  public fee: number = 10000;
  public currentDate: Date = new Date();
  public countries: any[] | undefined;
  public selectedCountry = {
    code: 'VN',
    name: 'Việt Nam',
    city: ['Cần Thơ', 'Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Cà Mau'],
  };
  public selectedCity = { name: 'Cần Thơ' };
  public cities = [
    { name: 'Cần Thơ' },
    { name: 'Hồ Chí Minh' },
    { name: 'Hà Nội' },
    { name: 'Đà Nẵng' },
    { name: 'Cà Mau' },
  ];

  public students = [
    {
      name: 'Thịnh',
      email: 'thinh123@gmail.com',
      password: 'hay123',
      marks: 9.7,
      fee: 100000,
      country: 'Việt Nam',
      city: 'Cần Thơ',
    },
    {
      name: 'Hay',
      email: 'hay123@gmail.com',
      password: 'hay123',
      marks: 1.9,
      fee: 150000,
      country: 'Việt Nam',
      city: 'Hà Nội',
    },
    {
      name: 'Như',
      email: 'nhu123@gmail.com',
      password: 'nhu123',
      marks: 9.9,
      fee: 230000,
      country: 'China',
      city: 'Thượng Hải',
    },
    {
      name: 'Đạt',
      email: 'dat123@gmail.com',
      password: 'dat123',
      marks: 6.9,
      fee: 100000,
      country: 'Japan',
      city: 'Tokyo',
    },
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

    this.countries = [
      {
        code: 'VN',
        name: 'Việt Nam',
        city: ['Cần Thơ', 'Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Cà Mau'],
      },
      {
        code: 'CN',
        name: 'Trung Quốc',
        city: ['Thượng Hải', 'Bắc Kinh', 'Hồng Kông', 'Thiên Tân', 'Vũ Hán'],
      },
      {
        code: 'JP',
        name: 'Nhật Bản',
        city: ['Tokyo', 'Fukushima', 'Kyoto', 'Nagasaki', 'Hiroshima'],
      },
      {
        code: 'TH',
        name: 'Thái Lan',
        city: ['Băng Cốc', 'Chiang Mai', 'Phuket', 'Pattaya', 'Chiang Rai'],
      },
    ];
    console.log('country', this.countries);
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
        fee: this.fee,
        country: this.selectedCountry.name,
        city: this.selectedCity.name,
      };
      console.log('new Student', newStudent);

      this.students.push(newStudent);
      this.reset();
      this.showSuccess('Add new success');
    } else {
      this.showError('Add new error');
    }
  }
  public changeCity(event: any): void {
    console.log('event:', event);
    const country = event.value;
    console.log('country get', country);
    if (country && country.city.length > 0) {
      this.selectedCity.name = country.city[0];
      for (let index = 0; index < country.city.length; index++) {
        this.cities[index].name = country.city[index];
      }
      this.selectedCity = this.cities[0];
      console.log('cities', this.cities);
    }
  }
}
