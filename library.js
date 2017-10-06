//Track class
class Track {
  constructor(name, rating, length) {
    this._name = name;
    this._rating = rating;
    this._length = length;
  }

  getName() {
    return this._name;
  }

  getRating() {
    return this._rating;
  }

  getLength() {
    return this._length;
  }

  setRating(rating) {
    this._rating = rating;
  }

}


//Playlist is composed of tracks
class Playlist extends Track {
  constructor(name) {
    super();
    this._name = name;
    this._tracks = [];
  }

  overallRating() {
    let sum = 0;
    this._tracks.forEach(song => {
      sum += song.getRating();
    })

    let avg = sum/this._tracks.length;
    return avg;
  }

  totalDuration() {
    let total = 0;
    this._tracks.forEach(song => {
      total += song.getLength();
    })

    return total;
  }

  addTrack(track) {
    this._tracks.push(track);
    console.log(`The track ${track.getName()} has been added to the playlist ${this.getName()}`)
  }

  removeTrack(track) {
    this.getTracks().forEach((song, index) => {
      if (song.getName() === track.getName()) {
        let removedTrack = this._tracks.splice(index, 1);
        console.log(`${removedTrack[0].getName()} has been removed from the platlist ${this.getName()}`)
      }
    })
  }

  getName() {
    return this._name;
  }

  getTracks() {
    return this._tracks;
  }

  setName(name) {
    this._name = name;
    console.log(`The playlist has been renamed to ${this.getName()}`);
  }

}



//Library is composed of playlists
class Library extends Playlist {
  constructor(name, creator) {
    super();
    this._name = name;
    this._creator = creator;
    this._playlists = [];
  }

  addPlaylist(playlist) {
    this._playlists.push(playlist);
    console.log(`Playlist ${playlist.getName()} has been added to the library ${this.getName()}`);
  }

  getName() {
    return this._name;
  }

  getCreator() {
    return this._creator;
  }

  getPlaylists() {
    return this._playlists;
  }

}

let track1 = new Track('Norwegian Wood', 4, 120);
let track2 = new Track('Golden Slumbers', 5, 80);
let track3 = new Track('Dear Prudence', 3, 180);
let track4 = new Track('Young Americans', 1, 220);
let track5 = new Track('Rock n Roll Suicide', 2, 130);
track4.setRating(5);



let playlist1 = new Playlist('The Betles');
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist1.addTrack(track4);
playlist1.removeTrack(track4);
playlist1.setName('The Beatles');

let playlist2 = new Playlist('David Bowie');
playlist2.addTrack(track4);
playlist2.addTrack(track5);



let library1 = new Library('Spotify', 'George');
library1.addPlaylist(playlist1);
library1.addPlaylist(playlist2);




console.log(
`Testing...

${library1.getName()} was created by ${library1.getCreator()}.
It is composed of ${library1.getPlaylists().length} playlists:

- ${library1.getPlaylists()[0]}
- ${library1.getPlaylists()[1]}



Playlist 1 is called ${playlist1.getName()},
is ${playlist1.totalDuration()} seconds long,
and has an average rating of ${playlist1.overallRating()}.
Its tracks are: ${playlist1.getTracks()}.

Playlist 2 is called ${playlist2.getName()},
is ${playlist2.totalDuration()} seconds long,
and has an average rating of ${playlist2.overallRating()}.
Its tracks are: ${playlist1.getTracks()}.


The track information is as follows:
Track 1:
Name: ${track1.getName()}
Rating: ${track1.getRating()}
Length: ${track1.getLength()}

Track 2:
Name: ${track2.getName()}
Rating: ${track2.getRating()}
Length: ${track2.getLength()}

Track 3:
Name: ${track3.getName()}
Rating: ${track3.getRating()}
Length: ${track3.getLength()}

Track 4:
Name: ${track4.getName()}
Rating: ${track4.getRating()}
Length: ${track4.getLength()}

Track 5:
Name: ${track5.getName()}
Rating: ${track5.getRating()}
Length: ${track5.getLength()}


Logging off...
Goodbye.`);




