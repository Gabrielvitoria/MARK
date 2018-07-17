import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductProvider, Product } from '../../providers/product/product';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products: any[] = [];
  onlyInactives: boolean = null;
  searchText: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private productProvider: ProductProvider) { }

  ionViewDidEnter(){
    this.getAllProducts();
  }

  getAllProducts() {
    this.productProvider.getAll(!this.onlyInactives, this.searchText)
      .then((result: any[]) => {
        this.products = result;
      });
  }

  addProduct() {
    this.navCtrl.push('EditProductpage');
  }

  editProduct(id: number) {
    this.navCtrl.push('EditProductpage', { id: id });
  }

  removeProduct(product: Product) {
    this.productProvider.remove(product.id)
      .then(() => {
        // limpar o array
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
        this.toast.create({ message: 'Produto removido.', duration: 2000, position: 'botton' }).present();
      })
  }


  filterProducts(){
    this.getAllProducts();
  }

}
