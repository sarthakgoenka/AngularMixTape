import { Song } from './../../../store/models/song.model';
import { Component, OnInit, Input, EventEmitter, Output, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-playable-list',
  templateUrl: './playable-list.component.html',
  styleUrls: ['./playable-list.component.scss']
})
export class PlayableListComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() info: string;
  @Input() playAllExists = true;
  @Input() removeAllExists = false;
  @Input() songs: Song[];

  @Output() onPlayall = new EventEmitter();
  @Output() onPlayItem = new EventEmitter();
  @Output() onRemoveAll = new EventEmitter();

  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Play all items.
   */
  playAll() {
    this.onPlayall.emit();
  }

  /**
   * Play a single item.
   */
  playItem(song: Song) {
    this.onPlayItem.emit(song);
  }

  /**
   * Play all items.
   */
  removeAll() {
    this.onRemoveAll.emit();
  }
}
