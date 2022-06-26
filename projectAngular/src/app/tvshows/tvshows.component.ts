import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  constructor(private _TrendingService:TrendingService) { }
  trendingTvshows:any[]=[];

  getTrendingTv(){
    this._TrendingService.getTrending("tv").subscribe((response)=>{
      this.trendingTvshows = response.results.filter((item:any)=>{
        return item.media_type=='tv'
      })
    })
  }

  ngOnInit(): void {
    this.getTrendingTv();
  }

}
