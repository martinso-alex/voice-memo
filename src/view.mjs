export default class View {
	constructor() {
		this.btnStart = document.getElementById("btnStart");
		this.btnStop = document.getElementById("btnStop");
		this.audio = document.getElementById("audio");
	}

	onRecordClick(command) {
		return () => {
			command();
			this.toggleAudioElement({ visible: false });
		};
	}

	onStopRecordingClick(command) {
		return () => {
			command();
		};
	}

	configureStartRecordingButton(command) {
		this.btnStart.addEventListener("click", this.onRecordClick(command));
	}

	configureStopRecordingButton(command) {
		this.btnStop.addEventListener("click", this.onStopRecordingClick(command));
	}

	toggleAudioElement({ visible }) {
		const classList = this.audio.classList;
		visible ? classList.remove("hidden") : classList.add("hidden");
	}

	playAudio(url) {
		const audio = this.audio;
		audio.src = url;
		audio.muted = false;

		this.toggleAudioElement({ visible: true });
		audio.addEventListener("loadedmetadata", () => audio.play());
	}
}
