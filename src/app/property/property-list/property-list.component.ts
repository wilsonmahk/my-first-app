
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty>;

  constructor(private housingService:HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe( data=>{

      console.log(data);
     this.properties=data;
        },error=>{console.log(error)});

    // this.http.get('data/properties.json').subscribe(
    //   data=>{

    //     console.log(data);
    //     this.properties=data;
    //   }
    // );
  }

}
