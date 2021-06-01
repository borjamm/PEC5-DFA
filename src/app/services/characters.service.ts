import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(
      'https://finalspaceapi.com/api/v0/character'
    );
  }

  getCharacterById(id: String): Observable<Character> {
    return this.http.get<Character>(
      'https://finalspaceapi.com/api/v0/character/' + id
    );
  }
}
