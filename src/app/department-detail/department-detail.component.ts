import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  technoId = null;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.technoId = parseInt(params.get('id'));
    });
  }

  goPrevious(){
    this.router.navigate(['/department', this.technoId - 1])
  }

  goNext(){
    this.router.navigate(['/department', this.technoId + 1])
  }

  gotoDepartments(){
    let selectedId =  this.technoId ? this.technoId : null;
    this.router.navigate(['/departments', {id: selectedId}])
  }

  showOverview(){
    this.router.navigate(['overview'], { relativeTo: this.route })
  }

  showContact(){
    this.router.navigate(['contact'], { relativeTo: this.route })
  }
}
