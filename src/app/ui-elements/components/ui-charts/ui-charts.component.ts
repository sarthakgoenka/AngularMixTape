import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import * as d3 from 'd3';

@Component({
  selector: 'app-ui-charts',
  templateUrl: './ui-charts.component.html',
  styleUrls: ['./ui-charts.component.scss']
})
export class UiChartsComponent implements OnInit {
  data: any[] = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    },
    {
      'name': 'France',
      'value': 7200000
    }
  ];
  label = 'Total distribution';
  colorScheme = {
    domain: ['#FDD835', '#3F51B5', '#009688', '#EF6C00']
  };

  // Gauge
  gaugeData = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    },
    {
      'name': 'France',
      'value': 7200000
    }
  ];

  // Area
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  areaData = [
    {
      'name': 'Songs per minute',
      'series': [
        {
          'name': '2010',
          'value': 2300000
        },
        {
          'name': '2012',
          'value': 4300000
        },
        {
          'name': '2013',
          'value': 3300000
        },
        {
          'name': '2014',
          'value': 7300000
        },
        {
          'name': '2015',
          'value': 8940000
        }
      ]
    },
  ];

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  pieData = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    },
    {
      'name': 'France',
      'value': 7200000
    }
  ];

  // Polar
  polarData = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 40632
        },
        {
          name: '2000',
          value: 36953
        },
        {
          name: '1990',
          value: 31476
        }
      ]
    },
    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 49737
        },
        {
          name: '2000',
          value: 45986
        },
        {
          name: '1990',
          value: 37060
        }
      ]
    },
    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 36745
        },
        {
          name: '2000',
          value: 34774
        },
        {
          name: '1990',
          value: 29476
        }
      ]
    },
    {
      name: 'United Kingdom',
      series: [
        {
          name: '2010',
          value: 36240
        },
        {
          name: '2000',
          value: 32543
        },
        {
          name: '1990',
          value: 26424
        }
      ]
    }
  ];
  legendTitle = 'Legend';
  tooltipDisabled = false;
  showGridLines = true;
  innerPadding = '10%';
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;

  curves = {
    Basis: shape.curveBasis,
    'Basis Closed': shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    'Cardinal Closed': shape.curveCardinalClosed,
    'Catmull Rom': shape.curveCatmullRom,
    'Catmull Rom Closed': shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    'Monotone X': shape.curveMonotoneX,
    'Monotone Y': shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore,
    default: shape.curveLinear
  };

  // line interpolation
  curveType = 'Linear';
  curve: any = this.curves[this.curveType];
  interpolationTypes = [
    'Basis', 'Bundle', 'Cardinal', 'Catmull Rom', 'Linear', 'Monotone X',
    'Monotone Y', 'Natural', 'Step', 'Step After', 'Step Before'
  ];

  closedCurveType = 'Linear Closed';
  closedCurve: any = this.curves[this.closedCurveType];
  closedInterpolationTypes = [
    'Basis Closed', 'Cardinal Closed', 'Catmull Rom Closed', 'Linear Closed'
  ];
  autoScale = true;
  rangeFillOpacity = 0.15;

  // bar
  barData = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    },
    {
      'name': 'France',
      'value': 7200000
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
