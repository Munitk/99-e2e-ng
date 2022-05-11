import { Component, OnInit } from '@angular/core';
import { elementAt, tap } from 'rxjs';
import { UserService } from '../services/user.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  UserTitle? : any;
  // UserFromApi
  // mydata: any;
  constructor(private myUserSer:UserService) { }

  ngOnInit(): void {
    this.UserTitle = this.myUserSer.getUserList()
    .pipe(
      tap((userList:any) => {
        userList.map(
          (element:any,index:number, arr:any) => {
            element['title'] = "thbs" + index;
            element['name'] = "Mr." + element['name'];
            return element;
          })
      })
    )
     
      .subscribe((data: any) => {this.UserTitle = data});
      // console.log(this.UserTitle)
      }
    

    // this.UserFromApi = this.myUserSer.getUserListFromApi().subsribe(
    //   (myUser))
  }

