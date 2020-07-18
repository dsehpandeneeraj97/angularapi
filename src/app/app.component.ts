import { Component } from '@angular/core';
import { Api } from './api';
import { ApiService } from './api.service';
import { MatTableDataSource } from '@angular/material/table';

  import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-git';
  /*Declerations of the variables by creating objects*/
  api:Api;
  /*Data source for rendering the columns in material table*/
  dataSource:Array<Api>;
  /*Defining the columns*/
  columndefs:any[]=['name_with_namespace','http_url_to_repo','name','favourite'];
  constructor(private apiService:ApiService){
    this.api=new Api();
    this.dataSource=[];
  }
  /*Calling the getApi method from Api service to get response */
  ngOnInit(){
    this.apiService.getApi().subscribe(res=>{
        this.dataSource=res;
    })
    
  }
  addApi(name_with_namespace,http_url_to_repo,name){
  const favi={name_with_namespace,http_url_to_repo,name}
    this.apiService.addApi(favi).subscribe(addedApi=>{
      this.dataSource.push(addedApi);
      this.api=new Api();
    })
  }

}
