
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg_image
		const bg_image = this.add.image(250, 335, "bg_image");
		bg_image.scaleX = 0.15;
		bg_image.scaleY = 0.15;

		// text1
		const text1 = this.add.text(244, 107, "", {});
		text1.text = "0\n";
		text1.setStyle({ "fontSize": "50px", "fontStyle": "bold" });

		// ground
		const ground = this.add.image(253, 676, "bg_image");
		ground.scaleX = 0.15;
		ground.scaleY = 0.01;
		ground.alpha = 0.4;
		ground.alphaTopLeft = 0.4;
		ground.alphaTopRight = 0.4;
		ground.alphaBottomLeft = 0.4;
		ground.alphaBottomRight = 0.4;

		// volume
		const volume = this.add.image(62, 50, "volume");
		volume.scaleX = 0.15;
		volume.scaleY = 0.15;

		// pause
		const pause = this.add.image(459, 52, "pause");
		pause.scaleX = 0.12;
		pause.scaleY = 0.12;

		// Time left
		const time_left = this.add.text(139, 39, "", {});
		time_left.text = "Time left :0:00\n\n";
		time_left.setStyle({ "fontSize": "30px", "fontStyle": "bold" });

		// mute
		const mute = this.add.image(57, 50, "mute");
		mute.scaleX = 0.15;
		mute.scaleY = 0.15;
		mute.visible = false;

		// reload
		const reload = this.add.image(244, 476, "reload");
		reload.scaleX = 0.15;
		reload.scaleY = 0.15;
		reload.visible = false;

		// game_paused
		const game_paused = this.add.image(255, 373, "game paused");
		game_paused.scaleX = 0.45;
		game_paused.scaleY = 0.45;
		game_paused.visible = false;

		// gameover
		const gameover = this.add.image(251, 393, "gameover");
		gameover.scaleX = 0.45;
		gameover.scaleY = 0.45;
		gameover.visible = false;

		// play_again
		const play_again = this.add.image(254, 456, "play again");
		play_again.scaleX = 0.6;
		play_again.scaleY = 0.6;
		play_again.visible = false;

		this.bg_image = bg_image;
		this.text1 = text1;
		this.ground = ground;
		this.volume = volume;
		this.pause = pause;
		this.time_left = time_left;
		this.mute = mute;
		this.reload = reload;
		this.game_paused = game_paused;
		this.gameover = gameover;
		this.play_again = play_again;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	bg_image;
	/** @type {Phaser.GameObjects.Text} */
	text1;
	/** @type {Phaser.GameObjects.Image} */
	ground;
	/** @type {Phaser.GameObjects.Image} */
	volume;
	/** @type {Phaser.GameObjects.Image} */
	pause;
	/** @type {Phaser.GameObjects.Text} */
	time_left;
	/** @type {Phaser.GameObjects.Image} */
	mute;
	/** @type {Phaser.GameObjects.Image} */
	reload;
	/** @type {Phaser.GameObjects.Image} */
	game_paused;
	/** @type {Phaser.GameObjects.Image} */
	gameover;
	/** @type {Phaser.GameObjects.Image} */
	play_again;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.score = 0;
		this.timedEvent = 0;
		this.initialTime = 60;
		this.uTime = 10;
		this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });

	    this.ball1 = this.physics.add.image(200, 300, 'ball1');
		this.ball1.setScale(0.08);
		this.ball1.setBounce(0.2);
		this.ball1.setGravityY(1500);
		this.ball1.setOrigin(0.5);

		this.rod = this.physics.add.image(490, 220, "rod");
		this.rod.scaleX = 0.25;
		this.rod.scaleY = 0.6;
		this.rod.refreshBody();
		this.rod.setOrigin(0.5);
		this.rod.setImmovable(true);

		// hoop1
		this.basket3 = this.physics.add.image(430, 290, "hoop1");
		this.basket3.scaleX = 0.25;
		this.basket3.scaleY = 0.25;
		this.basket3.refreshBody();
		this.basket3.setOrigin(0.5);
		this.basket3.setImmovable(true);


		// rod_1
		this.rod2 = this.physics.add.image(370, 290, "rod");
		this.rod2.scaleX = 0.1;
		this.rod2.scaleY = 0.35;
		this.rod2.refreshBody();
		this.rod2.setOrigin(0.5);
		this.rod2.setImmovable(true);


		this.rod3 = this.physics.add.image(this.basket3.x, this.basket3.y - 45, "g1");
		this.rod3.setScale(0.4);
		this.rod3.setScale(0.4);
		this.rod3.setOrigin(0.5);
		this.rod3.refreshBody();
		this.rod3.visible = false;
		this.rod3.setImmovable(true);



		this.ground = this.physics.add.staticImage(253, 676, "bg_image");
		this.ground.scaleX = 0.15;
		this.ground.scaleY = 0.01;
		this.ground.alpha = 0.4;
		this.ground.refreshBody();

		this.volume.setInteractive().on("pointerdown", function () {
			console.log("hello");
			this.mute.visible = true;
			this.volume.visible = false;
		}, this)

		this.mute.setInteractive().on("pointerdown", function () {
			console.log("hello");
			this.mute.visible = false;
			this.volume.visible = true;
			this.music.setMute(true);
		}, this)

		this.pause.setInteractive().on("pointerdown", function () {
			console.log("hello");
			this.physics.pause();
			this.timedEvent.paused = true;
			this.reload.visible = true;
			this.game_paused.visible = true;
		}, this)
		this.reload.setInteractive().on("pointerdown", function () {
			this.reload.visible = false;
			this.physics.resume();
			this.game_paused.visible = false;
			this.timedEvent.paused = false;
		}, this)
		this.play_again.setInteractive().on("pointerdown",function(){
			this.scene.start("First"); 

		},this)
		var music = this.sound.add("Whistle");
		music.play();
		music.setVolume(0.2);
		



		this.bg_image.setInteractive().on("pointerdown", function () {
			if (this.basket3.x == 430) {
				// console.log("right");
				this.moveRight();
			}
			if (this.basket3.x == 65) {
				// console.log("letf");
				this.moveLeft();
			}
			if (this.basket3.x == 429) {
				this.moveRight();
			}
			if (this.basket3.x == 63) {
				this.moveLeft();
			}
			if (this.basket3.x == 425) {
				this.moveRight();
			}


		}, this)



		this.physics.add.collider(this.ball1, this.ground);
		this.overlap();

		/* END-USER-CODE */
}

/* END OF COMPILED CODE */

	// You can write more code here	
	collide() {
        console.log("collider");
		console.log("ball" ,this.ball1.y);
		if (this.ball1.y < this.rod3.y) {


			console.log("ball Y ",this.ball1.y);
		    this.physics.world.removeCollider(this.col1);
			this.scoreUpdate();
            this.basketPos();
			this.timeUpdate();

		}
	}


	formatTime(seconds) {
		// Minutes
		var minutes = Math.floor(seconds / 60);
		// Seconds
		var partInSeconds = seconds % 60;
		// Adds left zeros to seconds
		partInSeconds = partInSeconds.toString().padStart(2, '0');
		// Returns formated time
		return `${minutes}:${partInSeconds}`;
	}
	onEvent() {
		this.initialTime -= 1; // One second
		this.time_left.setText('Time Left: ' + this.formatTime(this.initialTime));
		if (this.initialTime == 0) {
			this.gameover.visible = true;
			this.play_again.visible = true;
			console.log("over")
			this.timedEvent.paused = true;

		}
	}
	overlap() {
		this.col1 = this.physics.add.collider(this.ball1, this.rod3, this.collide, null, this);
	}

	moveRight() {
		this.ball1.setVelocityY(-280 * 2.5);
		this.ball1.setVelocityX(152 * 2);


	}
	moveLeft() {
		this.ball1.setVelocityY(-280 * 2.5);
		this.ball1.setVelocityX(-152 * 1.8);

	}



	// goal() {
	// // console.log("ball y :: " +this.ball1.y);
	// // console.log("container pos ::"+this.container.x);
	//  if(this.ball1.y < this.basket3.y){



	ballposleft() {

		// console.log(" width :: " + screen.width)
		if (this.ball1.x > 500) {
			this.ball1.setX(20);
		}

	}
	scoreUpdate(){
			this.score = this.score + 1

			this.text1.text =this.score;
	}

	basketPos(){
		// 
		// 
		 this.physics.world.addCollider(this.col1);
		console.log("basket pos");
		if (this.basket3.x == 65) {

				setTimeout(() => {


				    this.overlap();	
					this.timeUpdate();
				    console.log("basket 1");

					this.basket3.setX(429);
					this.basket3.setY(400);
					this.rod.setX(490);
					this.rod.setY(320);
					this.rod2.setX(374);
					this.rod2.setY(395);
					this.rod3.setX(427);
					this.rod3.setY(350);


				}, 800)

			}
			else if (this.basket3.x == 430) {
					//this.physics.world.addCollider(this.col1);

				setTimeout(() => {


					this.overlap();
					this.timeUpdate();


					this.basket3.setX(65);
					this.basket3.setY(300);
					this.rod3.setX(67);
					this.rod3.setY(253);
					this.rod.setX(10);
					this.rod2.setX(125);
					this.rod2.setY(300);



				}, 800)
			}

			else if (this.basket3.x == 69) {
				setTimeout(() => {
					this.overlap();
					this.timeUpdate();
					console.log('basket 4');
					this.basket3.setX(425);
					this.basket3.setY(360);
					this.rod.setX(488);
					this.rod.setY(300);
					this.rod2.setX(370);
					this.rod2.setY(355);
					this.rod3.setX(488);
					this.rod3.setY(400);
				}, 800)

			}
			else if (this.basket3.x == 429) {
				setTimeout(() => {
					this.overlap();
					this.timeUpdate();
					console.log("basket5");
					this.basket3.setX(63);
					this.basket3.setY(430);
					this.rod.setX(9);
					this.rod.setY(350);
					this.rod2.setX(122);
					this.rod2.setY(430);
					this.rod3.setX(70);
					this.rod3.setY(383);
				}, 800)

			}
			else if(this.basket3.x == 63){
				setTimeout(() =>{

					this.overlap();
					this.timeUpdate();
					this.basket3.setX(430);
					this.basket3.setY(290);
					this.rod.setX(490);
					this.rod.setY(190);
					this.rod2.setX(373);
					this.rod2.setY(290);
					this.rod3.setX(this.basket3.x);
					this.rod3.setY(this.basket3.y - 45);

				},800)
			}

	}
	ballposrig() {
		if (this.ball1.x < 25) {
			this.ball1.setX(500);

		}
	}
	timeUpdate(){
			this.time_left.setText('Time Left: ' + this.formatTime(this.initialTime));
	}

	update() {

		this.ballposrig();
		this.ballposleft();
		



		this.physics.add.collider(this.ball1, this.rod);
		this.physics.add.collider(this.ball1, this.rod2);



		this.ball1.rotation += 0.030;
		this.ball1.rotation += 0.010;
		this.ball1.rotation -= 0.010;

	}



}
