import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

// this is a custom style directive for any element that has background yellow
// and on hovering it has the background red

@Directive({
  selector: '[appServerStyleDirective]'
})
export class ServerStyleDirectiveDirective implements OnInit {
  // we can also take the input from the element for example in this case we can take the input for the colors
  @Input() mouseEnterColor: string = 'yellow';
  @Input() mouseLeaveColor: string = 'red';

  // using host listner is one way of doing it another way is to use host binding
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color',this.mouseEnterColor);
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elRef.nativeElement,'color','green');
    this.renderer.setStyle(this.elRef.nativeElement,'background-color',this.mouseLeaveColor);
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
  }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.renderer.setStyle(this.elRef.nativeElement,'color','white');
    // this.backgroundColor = 'indigo';
  }

  // now we can use this variable to change the color
  @HostBinding('style.backgroundColor') backgroundColor: string = 'pink';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

}
