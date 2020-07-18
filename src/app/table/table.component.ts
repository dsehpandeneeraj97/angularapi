import { Component, OnInit } from '@angular/core';
export interface Git{
  repo:string;
  author:string;
  issues:string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource: Git[] = [
    {repo: 'gitlab.com', author: 'nd', issues: 'done'},
    {repo: 'gitlab.com', author: 'nd', issues: 'done'},
    {repo: 'gitlab.com', author: 'nd', issues: 'done'}
 
 ];
 displayedColumns: string[] = ['repo', 'author', 'issues'];

  constructor() { }

  ngOnInit(): void {
  }

}
