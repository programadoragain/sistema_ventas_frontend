import { Component } from '@angular/core';
import { SidebarComponent } from "../../dashboard/components/sidebar/sidebar.component";

@Component({
    selector: 'app-add-product',
    standalone: true,
    templateUrl: './add-product.component.html',
    styleUrl: './add-product.component.css',
    imports: [SidebarComponent]
})
export class AddProductComponent {

}
