import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'oa-card',
  templateUrl: './oa-card.component.html',
  styleUrls: ['./oa-card.component.scss']
})
export class OaCardComponent implements OnInit {
  @Input() header: string;
  @Input() headerColor: string;


  constructor() { }

  ngOnInit() {
  }


  /**
   * ripped off from here
   * https://vanillajstoolkit.com/helpers/getcontrast/
   */
  getBackColor(hexcolor) {

    // If a leading # is provided, remove it
    if (hexcolor.slice(0, 1) === '#') {
      hexcolor = hexcolor.slice(1);
    }

    // If a three-character hexcode, make six-character
    if (hexcolor.length === 3) {
      hexcolor = hexcolor.split('').map(function (hex) {
        return hex + hex;
      }).join('');
    }

    // Convert to RGB value
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);

    // Get YIQ ratio
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    // Check contrast
    return (yiq >= 128) ? 'black' : 'white';

  };



}
