export function fetchGames() {
    return despatch => {
        fetch('http://localhost:8080/api/games');
    }
}