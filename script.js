"use strict"

window.onload = function() {
    const parallax = document.querySelector('.wrapper');

    if(parallax) {
        const content = document.querySelector('.container');
        const gimp = document.querySelector('.gimp');
        const pencil = document.querySelector('.pencil');
        const photoshop = document.querySelector('.Photoshop');
        const strawberry = document.querySelector('.Strawberry');
        const par = document.querySelector('.Par_im');

        const forGimp = 19;
        const forPencil = 28;
        const forPhotoshop = 25;
        const forStrawberry = 20;
        const forPar = 17;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;
        
        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            gimp.style.cssText = `transform: translate(${positionX / forGimp}%,${positionY / forGimp}%);`;
            pencil.style.cssText = `transform: translate(${positionX / forPencil}%,${positionY / forPencil}%);`;
            photoshop.style.cssText = `transform: translate(${positionX / forPhotoshop}%,${positionY / forPhotoshop}%);`;
            strawberry.style.cssText = `transform: translate(${positionX / forStrawberry}%,${positionY / forStrawberry}%);`;
            par.style.cssText = `transform: translate(${positionX / forPar}%,${positionY / forPar}%);`;
           

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {

            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });

        let thresholdSets = [];
        for (let i = 0; i <= 1.0; i += 0.005) {
            thresholdSets.push(i);
        }
        const callbaсk = function (entries, obsercer) {
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
            setParallaxItemsStyle(scrollTopProcent);
        };

        const observer = new IntersectionObserver(callbaсk, {
            threshold: thresholdSets
        });

        observer.observe(document.querySelector('.content'));

    }
}