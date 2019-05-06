import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Thriller', duration: '4:05' },
    { title: 'I Want it That Way', duration: '2:40' },
    { title: 'Bad Day', duration: '4:15' },
    { title: 'Seven Armies', duration: '3:20' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})