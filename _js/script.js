
import Boot from './classes/states/Boot';
import Preload from './classes/states/Preload';
import Menu from './classes/states/Menu';
import Play from './classes/states/Play';

let game = new Phaser.Game(288,505, Phaser.AUTO);

game.state.add('Menu',Menu,false);
game.state.add('Preload',Preload,false);
game.state.add('Boot',Boot,true);
game.state.add('Play',Play,false);
