import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../constant/global-constants';
import { DataTablesModule } from "angular-datatables";

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [DataTablesModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {

  displayedColums: string[] = ['name', 'categoryName', 'description', 'price', 'action','status'];
  dataSource: any;
  responseMessage: any;

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.tableData();
  }

  tableData() {
    this.productService.getAllProducts().subscribe((response: any) => {
      this.dataSource= response;
      setTimeout(() => {   
          $('#datatable').DataTable( {
                              pagingType: 'full_numbers',
                              pageLength: 5,
                              processing: true,
                              lengthMenu : [5, 10, 25],
                          });
    }, 2);
    }, (error: any) => {
      console.log(error.error?.message);
      if (error.error?.message) this.responseMessage = error.error?.message;
      else 
        this.responseMessage = GlobalConstants.genericError;

      //this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*
  handleAddAction() { 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Add'
    };
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(ProductComponent, dialogConfig);
    this.router.events.subscribe(() => dialogRef.close());

    const sub = dialogRef.componentInstance.onAddProduct.subscribe((response:any) => this.tableData());
  }

  handleEditAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data: values
    };
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(ProductComponent, dialogConfig);
    this.router.events.subscribe(() => dialogRef.close());

    const sub = dialogRef.componentInstance.onEditProduct.subscribe((response:any) => this.tableData());
  }

  handleDeleteAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'delete product: ' + values.name,
      confirmation: true
    };
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response:any) => {
      this.ngxService.start();
      this.deleteProduct(values.id);
      dialogRef.close();
    });
  }

  deleteProduct(id: any) {
    this.productService.delete(id).subscribe((response:any) => {
      this.ngxService.stop();
      this.tableData();
      this.responseMessage= response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,"success");
    }, (error: any) => {
      this.ngxService.stop();
      console.log(error.error?.message);
      if (error.error?.message) this.responseMessage = error.error?.message;
      else
        this.responseMessage = GlobalConstants.genericError;

      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });
  }

  onChange(status: any, id: any) {
    this.ngxService.start();
    var data= {
      status: status.toString,
      id: id
    }

    this.productService.updateStatus(data).subscribe((response:any) => {
      this.ngxService.stop();
      this.responseMessage= response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,"success");
    }, (error: any) => {
      this.ngxService.stop();
      console.log(error.error?.message);
      if (error.error?.message) this.responseMessage = error.error?.message;
      else
        this.responseMessage = GlobalConstants.genericError;

      this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
    });
  }
  */

}
