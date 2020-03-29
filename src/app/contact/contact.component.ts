import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ],
})
export class ContactComponent {
  url = 'https://formspree.io/moqlownr';

  constructor(
    private http: HttpClient,
  ) { }

  onSubmit(f: NgForm) {
    this.http.post(this.url, f.value).subscribe();
  }
}
