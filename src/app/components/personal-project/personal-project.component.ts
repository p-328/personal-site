import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['./personal-project.component.scss']
})
export class PersonalProjectComponent implements OnInit {
  @Input() title!: string;
  @Input() desc!: string;
  @Input() externalContent!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
