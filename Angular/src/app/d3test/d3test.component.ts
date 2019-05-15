
import * as d3 from 'd3';
import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-d3test',
  templateUrl: './d3test.component.html',
  styleUrls: ['./d3test.component.css']
})
export class D3testComponent implements AfterContentInit {
  title = 'app';


  radius = 10;

  ngAfterContentInit() {
    d3.select('p').style('color', 'red');
  }

  colorMe() {
    d3.select('button').style('color', 'red');
  }

  clicked(event: any) {
    d3.select(event.target).append('circle')
      .attr('cx', event.x)
      .attr('cy', event.y)
      .attr('r', () => {
        return this.radius;
      })
      .attr('fill', 'red');
  }
}