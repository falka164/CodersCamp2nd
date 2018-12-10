export default class BackgroundGenerator {

    constructor(dropNum) {
        this.dropNum = dropNum;
    }
    randRange(minNum, maxNum) {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
    createRain() {
        for (let i = 1; i < this.dropNum; i++) {
            let dropLeft = this.randRange(0, 1600);
            let dropTop = this.randRange(-1000, 1400);

            $('.dropItems').append('<i class="drop fas fa-cat" id="drop' + i + '"></i>');
            $('#drop' + i).css('left', dropLeft);
            $('#drop' + i).css('top', dropTop);
        }
    }
}
