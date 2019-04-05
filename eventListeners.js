document.addEventListener('keydown', (key) => {
    if(canInput) {
        if(key.code === 'KeyA') {
            console.log('button pressed: A');
        }

        if(key.code === 'KeyS') {
            console.log('button pressed: S');
        }

        if(key.code === 'KeyD') {
            console.log('button pressed: D');
        }

        if(key.code === 'KeyF') {
            console.log('button pressed: F');
        }

        if(key.code === 'KeyQ') {
            console.log('button pressed: Q');
        }

        if(key.code === 'KeyW') {
            console.log('button pressed: W');
        }

        if(key.code === 'KeyE') {
            console.log('button pressed: E');
        }

        if(key.code === 'KeyR') {
            console.log('button pressed: R');
        }
    }

    if(key.code === 'ArrowUp') {
        start = true;
    }

});