import Bird from '../objects/Bird';
import Ground from '../objects/Ground';
export default class Play extends Phaser.State { 
	create() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 500;

		this.background = this.game.add.sprite(0, 0, 'background');
		this.ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
		this.ground.autoScroll(-200, 0);


		this.bird = new Bird(this.game, 100, this.game.height/2);
		this.game.add.existing(this.bird);

		this.ground = new Ground(this.game, 0, 400);
		this.game.add.existing(this.ground);
	}
	update(){
		this.game.physics.arcade.collide(this.bird, this.ground);
	}
}