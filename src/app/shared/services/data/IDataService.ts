import { Observable } from 'rxjs';

export interface IDataService<returnType> {
    readSingle(id: string): Observable<returnType>;
    readAll(): Observable<returnType[]>;
    search(searchObject: unknown): Observable<returnType[]>;
    create(createObject: unknown): Observable<returnType[]>;
    update(updateObject: unknown): Observable<returnType[]>;
    delete(id: string): Observable<returnType[]>;
}