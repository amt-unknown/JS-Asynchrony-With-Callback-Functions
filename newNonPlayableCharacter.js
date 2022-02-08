function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    function walkTimeout(time,callback){
        setTimeout(() => {
            stop();
            if(callback){
                callback();
            }
        },time);
    }

    function walkDirection(npcDirection, time, callback){
        direction = npcDirection;
        element.src = `./assets/red-character/${npcDirection}.gif`;
        walkTimeout(time,callback);
    }

    // function walkEast(time, callback) {
    //     direction = 'east'
    //     element.src = `./assets/red-character/east.gif`
    //     walkTimeout(time,callback);
    // }

    // function walkNorth(time, callback) {
    //     direction = 'north'
    //     element.src = `./assets/red-character/north.gif`
    //     walkTimeout(time,callback);
    // }

    // function walkWest(time, callback) {
    //     direction = 'west'
    //     element.src = `./assets/red-character/west.gif`
    //     walkTimeout(time,callback);
    // }

    // function walkSouth(time, callback) {
    //     direction = 'south'
    //     element.src = `./assets/red-character/south.gif`
    //     walkTimeout(time,callback);
    //}

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        // walkWest: walkWest,
        // walkNorth: walkNorth,
        // walkEast: walkEast,
        // walkSouth: walkSouth,
        walkDirection: walkDirection,
        stop: stop
    }
}