import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  Input,
  HostListener,
} from '@angular/core';

@Directive({
  standalone: false,
  selector: '[tooltip], [classfname], [classlname], [stickyHeader]',
})
export class TooltipDirective implements OnInit {
  @Input('tooltip') tooltipTitle: string;
  @Input('classfname') tooltipfClass: string;
  @Input('classlname') tooltiplClass: string;
  @Input('stickyHeader') stickyHeader?: boolean;
  @Input('extraClass') extraClass?: string;
  @Input('offset') offset: number;
  tooltip: HTMLElement;

  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip && this.tooltipTitle) {
      this.show();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.hide();
    }
  }

  show() {
    this.offset = this.offset ? this.offset : 10;
    this.create();
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
  }

  hide() {
    // this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
    this.renderer.removeChild(document.body, this.tooltip);
    this.tooltip = null;
  }

  create() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );

    this.renderer.appendChild(document.body, this.tooltip);

    if (this.tooltipfClass) {
      this.renderer.addClass(this.tooltip, 'ng-tooltip-first');
      this.setPosition();
    } else if (this.tooltiplClass) {
      this.renderer.addClass(this.tooltip, 'ng-tooltip-last');
      this.setPositionLastcard();
    } else {
      this.renderer.addClass(this.tooltip, 'ng-tooltip');
      this.setPosition();
    }

    if (this.stickyHeader) {
      this.renderer.addClass(this.tooltip, 'sticky-tooltip');
    }
    if (this.extraClass) {
      this.renderer.addClass(this.tooltip, this.extraClass);
    }
  }
  setPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    let top, left;
    top = hostPos.bottom + this.offset;
    left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }

  setPositionLastcard() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    let top, left;
    top = hostPos.bottom + this.offset;
    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
  }

  ngOnInit() {}
}
