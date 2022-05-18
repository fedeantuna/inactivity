const Main = imports.ui.main;
const Activities = Main.panel.statusArea.activities;

class Extension {
  enable() {
    if (Activities) {
      Activities.hide();
    }
  }

  disable() {
    if (Activities) {
      Activities.show();
    }
  }
}

function init() {
  return new Extension();
}
