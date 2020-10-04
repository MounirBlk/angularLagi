import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  selectedId = null;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.selectedId = parseInt(params.get('id'));
    });
  }

  technos=[    
    {id:1, name:"Angular"},
    {id:2, name:"Node"},
    {id:3, name:"MangoDB"},
    {id:4, name:"Ruby"},
    {id:5, name:"Bootstrap"},
  ]
  
  onSelectDpt(technoId){
    console.log(technoId);
    this.router.navigate(['/department',technoId])
  }
  isSelected(technoId){
    return technoId === this.selectedId;
  }
}
