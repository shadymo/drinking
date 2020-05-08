const next = document.getElementById('next');
const task = document.getElementById('task');

next.addEventListener('click', handleTasks);

function handleTasks(){
    var { tasks } = taskHolder
    var num = Math.floor(Math.random()* tasks.length)
    task.innerText = tasks[num]
    
}

const taskHolder = {
    tasks: [
        'Take a shot',
        'Take 2 shots',
        'Pick someone to take 2 shots',
        'Pick someone to take a shot with you',
        'Pick someone and you both take as many shots as they want',
        'Everyone takes a shot!',
        'Everyone but this person takes a shot',
        'All guys drink',
        'All girls drink',
        'Never have I ever',
        'WATERFALLLL!'
    ]
}