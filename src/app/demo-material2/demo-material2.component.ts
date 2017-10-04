import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-demo-material2',
  templateUrl: './demo-material2.component.html',
  styles: []
})
export class DemoMaterial2Component implements OnInit {
  modalActions = new EventEmitter<string | MaterializeAction>();
  selectOptions: any = [
    { name: 'Java', value: 1500 },
    { name: 'AngularJs', value: 1200 },
    { name: 'Angular', value: 1600 },
    { name: 'Bootstrap3', value: 750 },
    { name: 'Bootstrap4', value: 850 },
    { name: 'Material', value: 900 },
    { name: 'Material2', value: 950 }
  ];
  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

}
