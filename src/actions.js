export function fetchGames() {
    return despatch => {
        fetch('/api/games');
    }
}