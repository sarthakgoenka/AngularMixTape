import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  uiElementsBoxes = [
    {
      name: 'Buttons',
      icon: 'code',
      subtext: 'Button styles for the template',
      url: '/ui/buttons',
    },
    {
      name: 'Components',
      icon: 'settings_input_component',
      subtext: 'Form elements from Material design',
      url: '/ui/components',
    },
    {
      name: 'Forms',
      icon: 'transform',
      subtext: 'Form elements from Material design',
      url: '/ui/forms',
    },
    {
      name: 'Charts',
      icon: 'show_chart',
      subtext: 'Custom pluggable charts',
      url: '/ui/charts',
    },
    {
      name: 'Icons',
      icon: 'photo_size_select_small',
      subtext: 'Material design icons ready to use',
      url: '/ui/icons',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
