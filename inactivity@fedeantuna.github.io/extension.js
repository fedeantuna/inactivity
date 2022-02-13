const main = imports.ui.main;

const activities = main.panel.statusArea.activities;

const enable = () => {
	if (activities) {
		activities.hide();
	}
}

const disable = () => {
	if (activities) {
		activities.show();
	}
}
