import { Component } from '@angular/core';
import { Platform } from 'src/app/models/platform/platform';
import { PlatformService } from 'src/app/services/platform/platform.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent {
    platforms:Platform[]=[];
    dataLoaded=false;

    constructor(private platformService:PlatformService){}

    ngOnInit():void{
      this.getPlatforms();
    }
    
    getPlatforms(){
      this.platformService.getPlatforms().subscribe(response=>{
        this.platforms=response.data;
        this.dataLoaded=true;
      })
    }
}
