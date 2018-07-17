import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { SQLiteObject } from '../../../node_modules/@ionic-native/sqlite';


@Injectable()
export class ProductProvider {

  constructor(private dbProvider: DatabaseProvider) {

  }

  public insert(product: Product) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into products (name, price, duedate, active, category_id) values(?, ?, ?, ?, ?)';
        let data = [product.name, product.price, product.duedate, product.active ? 1 : 0, product.category_id];
        return db.executeSql(sql, data)
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e))
  }

  public update(product: Product) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update products set name = ?, price = ?, duedate= ?, active= ?, category_id =? where id = ?';
        let data = [product.name, product.price, product.duedate, product.active ? 1 : 0, product.category_id, product.id];
        
        return db.executeSql(sql, data)
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e))
  }

  public remove(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from product where id = ?';
        let data = [id];
        return db.executeSql(sql, data)
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e))
  }

  public get(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from products where id = ?';
        let data = [id];
        return db.executeSql(sql, data)
        .then((data: any)=> {
          if(data.rows.length > 0 ){
            let item = data.rows.item(0);
            let product = new Product();
            product.id = item.id;
            product.name = item.name;
            product.price = item.price;
            product.duedate = item.duedate;
            product.active = item.active;
            product.category_id = item.category_id;

            return product;
          }
          else{
            return null;
          }
        })
        .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e))
  }

  public getAll(active: boolean, name: string = null) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select p.*, c.name as category_name from products p inner join categories c on p.category_id == c.id where p.active = ? ';
        let data: any [] = [active ? 1 : 0];

        if(name){
          sql += 'and p.name like ?'; 
          data.push('%' + name + '%');
        }
        return db.executeSql(sql, data)

        .then((data: any)=> {
          if(data.rows.length > 0 ){

            let products: any[] = [];

            for (let i = 0; i < data.rows.length; i++) {
              const product = data.rows.item(i);
              products.push(product);
            }
            return products;
          }
          else{
            return [];
          }
        })
        .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e))
  }

}


export class Product {
  id: number;
  name: string;
  price: number;
  duedate: Date;
  active: boolean;
  category_id: number;
}
