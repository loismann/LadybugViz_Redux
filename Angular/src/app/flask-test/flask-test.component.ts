import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-flask-test',
  templateUrl: './flask-test.component.html',
  styleUrls: ['./flask-test.component.css']
})
export class FlaskTestComponent {
  title = 'app';

  serverData: JSON;
  assholeData: JSON;
  suspiciousPerson:JSON;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5000/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }

  getAllAssholes() {
    this.httpClient.get('http://127.0.0.1:5000/employees').subscribe(data => {
      this.assholeData = data as JSON;
      console.log(this.assholeData);
    })
  }
  getEmployee() {
    this.httpClient.get('http://127.0.0.1:5000/employees/1').subscribe(data => {
      this.suspiciousPerson = data as JSON;
      console.log(this.suspiciousPerson);
    })
  }
}