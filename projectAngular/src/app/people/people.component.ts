import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }
  trendingPeople:any[]=[];

  getTrendingPeople(){
    this._TrendingService.getTrending("person").subscribe((response)=>{
      this.trendingPeople = response.results.filter((item:any)=>{
        return item.media_type=='person'
      })
      
    })
  }
  ngOnInit(): void {
    this.getTrendingPeople();
  }

}
