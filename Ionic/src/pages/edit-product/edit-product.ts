import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductProvider, Product } from '../../providers/product/product';
import { CategoryProvider } from '../../providers/category/category';

@IonicPage()
@Component({
  selector: 'page-edit-product',
  templateUrl: 'edit-product.html',
})
export class EditProductPage {
  model: Product;
  categories: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductProvider, private categoriaProvider: CategoryProvider, private toast: ToastController) {

    this.model = new Product();
    if (this.navParams.data.id) { // sinal que vc quer iditar
      // carregar dados do produto pegando dados do provider
      this.productProvider.get(this.navParams.data.id)
        .then((result: any) => {
          this.model = result;
        }).catch();
    }

  }

  ionViewDidLoad() {

    this.categoriaProvider.getAll()
      .then((result: any[]) => {
        this.categories = result;
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao carregar as categorias.', duration: 2000, position: 'botton' }).present();
      })
  }

  save() {
    this.saveProduct().then(() => {
      this.toast.create({ message: 'Produto salvo com sucesso', duration: 2000, position: 'botton' }).present();
      this.navCtrl.pop();
    }).catch(() => {
      this.toast.create({ message: 'Erro ao salvar produto.', duration: 2000, position: 'botton' }).present();
    })
  }

  private saveProduct() {
    if (this.model.id) {
      return this.productProvider.update(this.model);
    }
    else {
      return this.productProvider.insert(this.model);
    }
  }

}
