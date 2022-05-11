import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.css']
})
export class DetailProfileComponent implements OnInit {
  prodName: String = '';
  qParam: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(paramsData => this.prodName = paramsData['pid']);

    this.activatedRoute.queryParams.subscribe(paramsData => this.qParam = paramsData);

  }
}
