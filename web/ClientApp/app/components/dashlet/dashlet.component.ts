import {Component, Input} from '@angular/core';

@Component({
    selector: 'dashlet-cart',
    templateUrl: './dashlet.component.html',
    styleUrls: ['./dashlet.component.css']
})
export class DashletComponent {
    @Input('title') title: string;
    @Input('icon') icon: string;
    @Input('substr') substr: string;
    @Input('btnTitle') btnTitle: string;
    @Input('bgcolor') bgcolor: string;
    @Input('fcolor') fcolor: string;
    @Input('iconFcolor') iconfcolor: string;
    @Input('iconbgcolor') iconbgcolor: string;

    constructor() {}


}
