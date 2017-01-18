import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Track} from '../../../tracks/models/track.model';
import {Tracks} from '../../../tracks/collections/tracks.collection';
import './track-list.style.scss';

@Component({
  selector: 'track-list',
  template: require('./track-list.template.html'),
  providers: [Tracks]
})
export class TrackListComponent {

  @Input() tracks: Tracks<Track>;

  constructor(private router: Router) { }

  gotoDetail(track: Track): void {
    let link = ['/tracks', track.id];
    this.router.navigate(link);
  }

}
