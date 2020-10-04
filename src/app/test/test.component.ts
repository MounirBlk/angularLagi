import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "Mounir";
  boolTest = true;// false = success / true = danger
  danger = 'text-danger'
  success ='text-success'
  title=null;
  colorClasses= {
    "text-success" : !this.boolTest,
    "text-danger" : this.boolTest,
  }
  titleStyles={
    color:"orange",
    fontStyle:"italic"
  }
  lettre="A"//a,b,c ou A,B,C
  listPays=[
    {id:1, name:'France'},
    {id:2, name:'Allemagne'},
    {id:3, name:'Italie'},
    {id:4, name:'Espagne'}
  ];

  @Input("parentData") username;// ou @Input() parentData;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log("onInit")
  }

  GetUser() {
    return "Hello" + this.name;
  }
  onClickBtn(event = null){
    console.log(event)
    this.title= this.name + " said: " + event;
  }

  emitEvent(){
    this.childEvent.emit('Hey '+ this.username);
  }
}
