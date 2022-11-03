class Video{
	constructor (title, uploader, time){
		this.title = title;
		this.uploader = uploader;
		this.time = time;
	}

	watch(){
		const sentence = `${this.uploader} watched all ${this.time} of  ${this.title}`;
		console.log("sentence:", sentence);

	}
}

const vid1 = new Video("Lord Of The Rings", "Zev", "10 hours");
const vid2 = new Video("Harry Potter", "Chana", "12 hours");
vid1.watch();
vid2.watch();