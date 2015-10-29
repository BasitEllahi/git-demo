export default class Ground extends Phaser.TileSprite { 
	constructor(game, x, y) {
		super(game, x, y, 'ground'); 
		this.game.physics.arcade.enableBody(this);
		

		this.ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
		this.ground.autoScroll(-200, 0);
		
		this.body.allowGravity = false;
	}
	update() {
		
	}
}