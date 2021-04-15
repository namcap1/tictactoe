export function winner(grid){
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i<rows.length; i++){
        const [a, b, c] = rows[i];
        if(grid[a] && grid[a] === grid[b] && grid[a] === grid[c]){
            return grid[a];
        }
    }
    return null;
}

export function full(grid){
    let count = 0;
    grid.forEach(item => {
        if(item !== null){
            count++;
        }
    });
    if(count === 9){
        return true;
    }
    return false;
}

export const intialboard = {
    xisNext : true,
    grid: Array(9).fill(null),
    history: [],
    move: 1
};

