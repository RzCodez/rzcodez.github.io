function delay(n){
    n = n || 2000;
    return new Promise((done) =>{
        setTimeout(() =>{
            done();
        }, n);
    });
}

function pageTl(){
    var tl = gsap.timeline();
    tl.to(".transisi",{
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut"
    });
    tl.to(".transisi",{
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut"
    });
    tl.set(".transisi", { left: "-100%" });
}
function loadingTl(){
    var tl = gsap.timeline();
    tl.to(".loading-line",{
        duration: 1,
        delay: .3,
        width: "100%",
        left: 0,
        ease: "Expo.easeInOut"
    });
}
function contentAnimation(){
    var tl = gsap.timeline();
    tl.from(".animate-page", {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.2
    });
}
barba.init({
    sync: true,

    transitions: [
        {
            async leave(data) {
                const done = this.async();

                pageTl();
                await delay(1000);
                done();
            },

            async enter(data) {
                contentAnimation();
            },
            async once(data) {
                // const done = this.async();
                loadingTl();
                // await delay(1000);
                // done();
            },
            // async once(data) {
            //     contentAnimation();
            // },
        },
    ],
});