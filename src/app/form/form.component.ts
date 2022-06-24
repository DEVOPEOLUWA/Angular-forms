import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
export interface IOption {
  id?: number;
  name: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private pageRouter: Router) {}

  selectedState: any;
  selectedCountry: any;
  show = 'false';
  eRadio: any;

  states: IOption[] = [];

  isShowDivIf = false;
  notShowDivIf = false;

  displayToasterIf() {
    if (this.eRadio == 'True') {
      this.isShowDivIf = true;
      setTimeout(() => {
        this.pageRouter.navigate(['success']);
      }, 5000);
    } else if (this.eRadio == 'false') {
      this.notShowDivIf = true;
    }
  }
}
