import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bill } from 'src/app/models/bill/bill-details';
import { BillService } from 'src/app/services/bill/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  bills:Bill[]=[];
  dataLoaded=false;
  constructor(private billService:BillService, private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getBillsByCategory(params["categoryId"])
      }
      else{
        this.getBills()
      }
    })
  }

  getBills(){
    this.billService.getBills().subscribe(response=>{
      this.bills=response.data;
      this.dataLoaded=true;
    })
  }
  getBillsByCategory(categoryId:number){
    this.billService.getBillsByCategory(categoryId).subscribe(response=>{
      this.bills=response.data;
      this.dataLoaded=true;
    })
  }
}
