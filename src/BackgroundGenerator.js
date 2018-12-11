export default class BackgroundGenerator {

    constructor(dropNum) {
        this.dropNum = dropNum;
    }
    randRange(minNum, maxNum) {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
    createClouds() {
        for (let i = 1; i < this.dropNum; i++) {
            let dropLeft = this.randRange(500, 1200);
            let dropTop = this.randRange(0, 450);

            $('.dropItems').append('<i class="move fab fa-mixcloud fa-7x" id="move' + i + '"></i>');
            $('#move' + i).css('left', dropLeft);
            $('#move' + i).css('top', dropTop);
        }
    }
    createRain() {
        for (let i = 1; i < this.dropNum; i++) {
            let dropLeft = this.randRange(0, 1600);
            let dropTop = this.randRange(-1000, 1400);

            $('.dropItems').append('<i class="drop fas fa-tint" id="drop' + i + '"></i>');
            $('#drop' + i).css('left', dropLeft);
            $('#drop' + i).css('top', dropTop);
        }
    }
    createSnow() {
        for (let i = 1; i < this.dropNum; i++) {
            let dropLeft = this.randRange(0, 1600);
            let dropTop = this.randRange(-1000, 1400);

            $('.dropItems').append('<i class="drop far fa-snowflake" id="drop' + i + '"></i>');
            $('#drop' + i).css('left', dropLeft);
            $('#drop' + i).css('top', dropTop);
        }
    }
    createSun() {
        $('.dropItems').append('<i class="sun fab fa-ussunnah fa-10x" id="sun' + '"></i>');
        $('#sun').css('left', 1200);
        $('#sun').css('top', 200);
    }
}
