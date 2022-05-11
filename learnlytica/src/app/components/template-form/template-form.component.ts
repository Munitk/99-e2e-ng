import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  listLangs: string[] = ['ENG', 'HIND', 'TELGU'];
  email: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log(this.email)
  }

  getFormsValue(fVal: any) {
    console.log(fVal.value)
  }

}


