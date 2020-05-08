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
        'Play the State Game, loser takes 2 shots',
        'Pick someone to ask you Truth or Dare, take 3 shots if u deny',
        'Ask anyone Truth or Dare, they take 3 shots if they deny',
        'You start telephone, if its wrong, everyone takes a shot',
        'Whoevers birthdays the closest, takes a shot',
        'Whoever sparked the last blunt, take a shot',
        'Arm wrestle the person to either side of you, loser takes a shot',
        'Start off the rhyming game, loser takes a shot',
        'Pick 3 other people to take a shot with you',
        'If someone is willing to share a shot take a shot with them, if not take 2 shots'


    ]
}