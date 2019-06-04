
import {Directive,ElementRef,Renderer,HostListener} from '@angular/core'

@Directive({
    // selector:'[autogrow]',
    // host:{
    //     '(focus)':'onfocus()',  
    //      '(blur)':'onblur()'
    selector:'[autogrow]',
    host:{
        '(mouseenter)':'onenter()',
        '(mouseleave)':'onleave()'
    }
    
})
export class AutoGrowDirective{
    constructor(private el: ElementRef,private rn: Renderer)
    { 
       // rn.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
        
    }
    // onfocus(){  
    //     this.el.nativeElement.style.width="400px";
    // }
    // onblur(){
    //     this.el.nativeElement.style.width="200px";
    // }
    onenter(){
        this.el.nativeElement.style.width="500px" ;
    }
    onleave(){
        this.el.nativeElement.style.width=null;
    }
    // @HostListener('mouseenter') onMouseEnter() {
    //     this.el.nativeElement.style.width="500px"
        
    
    // }

    // @HostListener('mouseleave') onMouseLeave() {
    //     this.el.nativeElement.style.width="340px"
    // }

}