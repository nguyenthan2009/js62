function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    this.run = function(){
        this.speed = speed;
        alert(` runs with speed ${this.speed}.`);
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= 30;
        console.log('ok: ' + this.left);
    }

    this.movedown = function(){
        this.top += 20;
        console.log('ok: ' + this.left);
    }
    this.moveTop = function(){
        this.top -= 30;
        console.log('ok: ' + this.left);
    }


}

var hero = new Hero('https://upload.wikimedia.org/wikipedia/vi/2/2c/Nobita.png', 20, 30, 200,40);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
    hero.moveLeft();
    hero.movedown()
    hero.moveTop()

}
hero.run()
start();
