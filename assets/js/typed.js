document.addEventListener("DOMContentLoaded", function () {
    new Typed('#typewriter-text', {
        strings: [
            "Cansado de ficar procurando vaga para estacionar ?",
            "A DriveS resolve esse problema para você!"
        ],
        typeSpeed: 70,
        backSpeed: 30,
        startDelay: 500,
        backDelay: 2000,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        onComplete: function (self) {
            self.cursor.style.display = 'none'; // Esconde o cursor após a digitação
        }
    });
});
