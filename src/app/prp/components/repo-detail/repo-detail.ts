import {Component} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {Github} from "../../services/github";

@Component({
  selector: 'repo-detail',
  template: require('./repo-detail.html'),
  styles: [ require('./repo-detail.css') ],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class RepoDetail {
  
  repoDetails = {};
  
  constructor(routeParams:RouteParams, github: Github) {
    github.getRepoForOrg(routeParams.get('org'),routeParams.get('name'))
      .subscribe(repoDetails => {
        this.repoDetails = repoDetails;
      });
  }

}
