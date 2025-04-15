import {
  Component, Input, OnInit, OnChanges, SimpleChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ElementRef, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements 
  OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() userinfo: any;
  @ViewChild('nameRef') nameRef!: ElementRef;

  private previousName = '';
  private intervalId: any;

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.previousName = this.userinfo.name;

    this.intervalId = setInterval(() => {
      console.log(`[Interval] Still alive for ${this.userinfo.name}`);
    }, 4000);
  }

  ngDoCheck(): void {
    if (this.userinfo.name !== this.previousName) {
      console.log('ngDoCheck: name changed to', this.userinfo.name);
      this.previousName = this.userinfo.name;
    }
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: name element =', this.nameRef.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: cleaning up for', this.userinfo.name);
    clearInterval(this.intervalId);
  }
}
