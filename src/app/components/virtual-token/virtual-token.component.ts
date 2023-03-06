import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-virtual-token',
  templateUrl: './virtual-token.component.html',
  styleUrls: ['./virtual-token.component.css']
})
export class VirtualTokenComponent {
  token:string = "";
  datetime:number = Date.now();
  time:number = 0;

  progress:number = 0;
  error = false;

  interval: any = null;

  constructor(private http:RequestService){}

  async ngOnInit() {
    await this.getToken();
  }

  async getToken(){
    await this.http.get(environment.url + "api/generarToken/?user=user1@example.com").toPromise()
    .then(data =>{
      this.token = data.auth_token
      this.datetime = Date.parse(data.expires)
      this.time = Math.floor((this.datetime - Date.now())/1000)

      this.progress = Math.floor(100-(this.time * 100/60))

    }).catch( err =>{
      console.log("Error del servidor");
      console.log(err);
      this.error = true
    });

    this.runTime();
  }

  runTime(){
      this.interval = setInterval(async() => {

        this.time--;
        this.progress = Math.floor(100-(this.time * 100/60));

        if (this.time <= 0){
          clearInterval(this.interval);
          await this.getToken();
        }

      }, 1000);
  }

  pauseTimer(){
    clearInterval(this.interval);
  }

}
