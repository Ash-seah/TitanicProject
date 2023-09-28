import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  dataUser: any = [] = [];

  user: any = {

    nameValue: '',
    sexValue: '',
    ageValue : null ,
    parentsValue : '',
    siblingsValue: null,
    spouseValue: '',
    childrenVale: null

  }

  userGet() {
    this.dataUser.push(this.user);
    console.log(this.dataUser);
    this.user = {

      nameValue: '',
      sexValue: '',
      ageValue : null ,
      parentsValue: '',
      siblingsValue: null,
      spouseValue: '',
      childrenVale: null
      
    }
  }

}
