import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// this directive is exactly the opposite of the ngif directive

@Directive({
  selector: '[appServerUnlessDirective]'
})
export class ServerUnlessDirectiveDirective {

  @Input() set appServerUnlessDirective(condition: boolean) {
    if (!condition) {
      this.containerRef.createEmbeddedView(this.templateRef);
    } else {
      this.containerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private containerRef: ViewContainerRef) { }

}
