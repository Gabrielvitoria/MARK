import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  public getDB() { //Responsavel por pegar o banco de dados
    return this.sqlite.create({
      name: 'product.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject)=> {
          this.createTables(db);
          this.insertDefaultItems(db);

      })
      .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
    // sql bach : repsonsavel por inserir coisas em lote
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS categories(id integer primary key AUTOINCREMENT NOT NULL, name TEXT )'],
      ['CREATE TABLE IF NOT EXISTS products(id integer primary key AUTOINCREMENT NOT NULL , name TEXT, price REAL, duedate DATE, active integer, category_id integer, FOREIGN KEY(category_id) REFERENCES categories(id))']
    ])
      .then(() => console.log("Tabelas criadas com sucesso!"))
      .catch(e => console.log('Erro ao criar tabelas', e));
  }

  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from categories')
    .then((data: any) => {
      // se não existir nenhum registro
      if(data.rows.item(0).qtd == 0){
        // criando as tabelas
        db.sqlBatch([
          ['insert into categories (name) values (?)', ['Hambúrgueres']],
          ['insert into categories (name) values (?)', ['Bebidas']],
          ['insert into categories (name) values (?)', ['Sobremesas']],
        ])
          .then(() => console.log("Dados padrão incluidos com sucesso!"))
          .catch(e => console.log('Erro ao inserir dados padrão!', e));
      }
      })
      .catch(e => console.log('Erro ao consultar qtd de categories', e))
  }
}
