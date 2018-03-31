import Storage from 'good-storage'

const SEARCH_KEY = '_search_'
const PLAY_KEY = '_play_'

const SEARCH_MAX_LENGTH = 15
const PLAY_MAX_LENGTH = 100

const FAVORITE_KEY = '_favorite_'
const FAVORITE_MAX_LEN = 100
export function saveFavorite(song) {
  let songs = Storage.get(FAVORITE_KEY, [])
  insertArray(songs, song, (item) => {
    return song.id === item.id
  }, FAVORITE_MAX_LEN)
  Storage.set(FAVORITE_KEY, songs)
  return songs
}

export function deleteFavorite(song) {
  let songs = Storage.get(FAVORITE_KEY, [])
  deleteFromArray(songs, (item) => {
    return item.id === song.id
  })
  Storage.set(FAVORITE_KEY, songs)
  return songs
}

export function loadFavorite() {
  return Storage.get(FAVORITE_KEY, [])
}

export function saveSearch(query) {
	console.log(typeof(query))
	let searches = Storage.get(SEARCH_KEY,[])
	insertArray(searches,query,(item)=>{
		return item === query
	},SEARCH_MAX_LENGTH)
	Storage.set(SEARCH_KEY,searches)

	return searches
}

function insertArray(arr,val,compare,maxLen){
	console.log(typeof(compare))
	let index = arr.findIndex(compare)
	if(index === 0){
		return
	}
	if(index > 0){
		arr.splice(index,1)
	}
	arr.unshift(val)
	if(maxLen && arr.length > maxLen){
		arr.pop()
	}
}

function deleteFromArray(arr,compare){	
  let index = arr.findIndex(compare)
  if(index > -1){
  	arr.splice(index,1)
  }
}

export function loadSearch() {
  return Storage.get(SEARCH_KEY, [])
}

export function deleteSearch(query) {
  let searches = Storage.get(SEARCH_KEY, [])
  deleteFromArray(searches,(item) =>{
  	return item === query
  })
  Storage.set(SEARCH_KEY,searches)

  return searches
}

export function clearSearch(){
	Storage.remove(SEARCH_KEY)
	return []
}

export function savePlay(getsong){

	let songs = Storage.get(PLAY_KEY,[])
	insertArray(songs,getsong,(item)=>{
		getsong.id === item.id
	},PLAY_MAX_LENGTH)
	//songs = JSON.stringify(new Song(songs))
       //console.log(new Song(this.currentSong)) 
	//localStorage.setItem(PLAY_KEY,songs)

	Storage.set(PLAY_KEY,songs)
	return songs
}

export function loadPlay(){
	return Storage.get(PLAY_KEY,[])
}