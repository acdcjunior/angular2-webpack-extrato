import {Injectable} from "angular2/core";
import "rxjs/add/observable/fromPromise";
import {Observable} from "rxjs/Observable";
import {PouchDB} from "pouchdb";

@Injectable()
export class FaturaRepository {

	constructor(){}

	static getAll(){
    var pouch = new PouchDB(POUCHDB_URL, {ajax: {cache: true}});

    return Observable.fromPromise(pouch.allDocs({include_docs: true, descending: true}))
      .map((result) => result.rows.map((row) => row.doc));
	}

}
