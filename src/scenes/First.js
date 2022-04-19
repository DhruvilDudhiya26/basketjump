
// You can write more code here

/* START OF COMPILED CODE */

class First extends Phaser.Scene {

	constructor() {
		super("First");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg_image
		const bg_image = this.add.image(250, 337, "bg_image");
		bg_image.scaleX = 0.16;
		bg_image.scaleY = 0.15;

		// play_button
		const play_button = this.add.image(247, 506, "play-button");
		play_button.scaleX = 0.25;
		play_button.scaleY = 0.25;

		// logo1
		const logo1 = this.add.image(249, 102, "logo1");

		// logo2
		const logo2 = this.add.image(332, 194, "logo2");

		this.bg_image = bg_image;
		this.play_button = play_button;
		this.logo1 = logo1;
		this.logo2 = logo2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	bg_image;
	/** @type {Phaser.GameObjects.Image} */
	play_button;
	/** @type {Phaser.GameObjects.Image} */
	logo1;
	/** @type {Phaser.GameObjects.Image} */
	logo2;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
        this.play_button.setInteractive().on('pointerdown',function(pointer){
          console.log("hover");
        //   this.play_button.setTint()
         this.scene.start("Level");


},this)

// this.play.on('pointerout',function(pointer){

// })

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
