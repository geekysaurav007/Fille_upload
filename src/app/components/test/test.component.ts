import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  cities:any=[]
  magic:boolean=false
data:any=[
  {
    state:"bihar",
    cities:["mfp","spj","Pnbe"],
  },
  {
    state:"uttar pradesh",
    cities:["cnb","pyj","bsb"],
  }
]
  constructor() { }

  ngOnInit(): void {
  }
  
onSelect(data1:any){
  console.warn(data1.target.value)
  this.magic=true
 this.data.filter((ele:any)=>{
  if(ele.state==data1.target.value){
    this.cities=ele.cities
    console.warn(this.cities)
  }
 })
 


}
}
