function getOverlay(message) {
	const overlay = document.createElement("div");
	overlay.classList = "overlay";

	const overlayMessage = document.createElement("div");
	overlayMessage.classList = "overlay__message";
	overlayMessage.textContent = message;

	overlay.appendChild(overlayMessage);
	return overlay;
}

function addOverlay(overlay) {
	document.querySelector("body").appendChild(overlay);
}
function removeOverlay(overlay) {
	if (overlay.parentElement) {
		overlay.parentElement.removeChild(overlay);
	}
}

export const getDeviceType = () => {
	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return "tablet";
	}
	if (
		/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
			ua,
		)
	) {
		return "mobile";
	}
	return "desktop";
};

const overlay = getOverlay("Rotate your screen");

getDeviceType() === "mobile" ? addOverlay(overlay) : console.log("Desktop");

screen.orientation.addEventListener("change", function () {
	if (screen.orientation.type === "portrait-primary") {
		addOverlay(overlay);
	} else {
		removeOverlay(overlay);
	}
});
