import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  
  constructor(private _ActivatedRoute:ActivatedRoute,private _TrendingService:TrendingService) { }

  media_type:any;
  id:any;
  itemDetails:any;
  ngOnInit(): void {
    this.media_type=this._ActivatedRoute.snapshot.paramMap.get("media_type");
    this.id=this._ActivatedRoute.snapshot.paramMap.get("id");
    this._TrendingService.getTrendingDetails(this.media_type,this.id).subscribe((data)=>{
      this.itemDetails=data;
    })

  }

}
