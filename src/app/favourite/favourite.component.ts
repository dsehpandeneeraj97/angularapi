import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Api } from '../api';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  api:Api;
  /*Data source for rendering the columns in material table*/
  dataSource:Array<Api>;
  /*Defining the columns*/
  columndefs:any[]=['name_with_namespace','http_url_to_repo','name','delete'];
  constructor(private apiService:ApiService){
    this.api=new Api();
    this.dataSource=[];
  }
  /*Calling the getApi method from Api service to get response */
  ngOnInit(){
    this.apiService.getFavourite().subscribe(res=>{
        this.dataSource=res;
    })
    
  }
  deleteFavourite(id){
    this.apiService.deleteFavourite(id).subscribe(res=>{
      this.apiService.getFavourite().subscribe(res=>{
        this.dataSource=res;
      })
    })
}
}


