export const SET_GAMES='SET_GAMES';
export const ADD_GAME='ADD_GAME';

export function setGames(games){
    return{
        type:SET_GAMES,
        games
    }
}

 function handleResponse(response){
    if(response.ok){
        return response.json();
    } else{
        let error = new Error(response.statusText);
        error.response =response;
        throw error;
    }
}
export function addGame(game){
    return{
        type:ADD_GAME,
        game
    }
}
export function saveGame(data){
    return dispatch=>{
        return fetch('/api/games',{
            method:'post',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(handleResponse)
        .then(data=>dispatch(addGame(data.game)));
    }
}
export function fetchGames() {
    return dispatch => {
        fetch('/api/games')
        .then(res=>res.json())
        .then(data => dispatch(setGames(data.games)));
    }
}