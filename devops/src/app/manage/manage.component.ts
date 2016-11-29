import {Component, OnInit} from '@angular/core';
import {RestfulService} from "../restful.service";
import {ProjectService} from "../project.service";
import {StatusService} from "../status.service";

@Component({
  providers: [ProjectService, RestfulService, StatusService],
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  env = 0;
  props:{}[];
  private path;

  constructor(private statusService: StatusService,
              private projectService: ProjectService,
              private restfulService: RestfulService) {
  }

  ngOnInit() {
    this.getConfig();
  }

  changeEnv(env) {
    this.env = env;
    this.getConfig();
  }

  addConfig(key,value){
    if(!key || !value){
      alert('empty');
      return;
    }
    let patt = new RegExp("^([a-zA-Z.0-9]+)$");
    if(!patt.test(key)){
      alert('illegal');
      return;
    }
    this.projectService.currentUrl().then((res) => {
      this.path = res;
      this.restfulService.addConfig(
        this.projectService.projectName(this.path),
        this.projectService.projectPath(this.path),
        this.statusService.retrieve("PRIVATE-KEY"),
        this.statusService.retrieve("USER-NAME"),
        this.env, key,value
      ).subscribe(
        message => {
          if(message.code===0){
            this.getConfig();
          }
        },
        error => {
          console.log(error);
        });
    });
  }

  delConfig(key){
    console.log('del start:' + key);
    this.projectService.currentUrl().then((res) => {
      this.path = res;
      this.restfulService.delConfig(
        this.projectService.projectName(this.path),
        this.projectService.projectPath(this.path),
        this.statusService.retrieve("PRIVATE-KEY"),
        this.statusService.retrieve("USER-NAME"),
        this.env, key
      ).subscribe(
        message => {
          if(message.code===0){
            this.getConfig();
          }
        },
        error => {
          console.log(error);
        });
    });
  }

  private getConfig() {
    this.projectService.currentUrl().then((res) => {
      this.path = res;
      this.restfulService.getConfig(
        this.projectService.projectName(this.path),
        this.projectService.projectPath(this.path),
        this.statusService.retrieve("PRIVATE-KEY"),
        this.statusService.retrieve("USER-NAME"),
        this.env
      ).subscribe(
        message => {
          if(message.code===0){
            let kvmap:{};
            kvmap = message.body;
            this.props = [];
            for(let key in kvmap){
              this.props.push({
                key: key,
                val: kvmap[key]
              });
            }
          }
        },
        error => {
          console.log(error);
        });
    });
  }
}
