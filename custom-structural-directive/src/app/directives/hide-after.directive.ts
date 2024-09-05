import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hideAfter]',
  standalone: true
})
export class HideAfterDirective implements OnInit {
  @Input('hideAfter')
  delay: number = 0;

  @Input('hideAfterThen')
  thenTemplateRef: TemplateRef<any> | null = null;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }


  ngOnInit(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);

    setTimeout(() => {
      this.viewContainerRef.clear();
      this.thenTemplateRef && this.viewContainerRef.createEmbeddedView(this.thenTemplateRef);
    }, this.delay)
  }

}
