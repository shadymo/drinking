const next = document.getElementById('next');
const task = document.getElementById('task');

next.addEventListener('click', handleTasks);

function handleTasks(){
    
    task.innerText = 'handled'
    console.log(Math.random());
}

const taskHolder = {
    personal: [
        'Drink 2 Shots',
        'Pick a player for Rock Paper Scissors, loser takes 2 shots'
    ],
    pick: [

    ],

}