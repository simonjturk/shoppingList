import { IDataService } from './IDataService';
import { Observable } from 'rxjs';

export abstract class DataService<returnType> implements IDataService<returnType> {
    abstract readSingle(id: string): Observable<returnType>

    abstract readAll(): Observable<returnType[]>

    abstract search(searchObject: unknown): Observable<returnType[]>

    abstract create(createObject: unknown): Observable<returnType[]>

    abstract update(updateObject: unknown): Observable<returnType[]>

    abstract delete(id: string): Observable<returnType[]>



}