import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService
      .getAllCharacters()
      .subscribe((characters) => (this.characters = characters));
  }
}
