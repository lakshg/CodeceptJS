const { I } = inject();

module.exports = {
  liveStreamPlayerSelector: '.aj-video-player',
  switchPlayerButtonSelector: '#liveStreamPlayerHelpButton',

  seeLivestreamPlayer() {
    I.seeElement(this.liveStreamPlayerSelector);
  },

  seeSwitchPlayerButton() {
    I.seeElement(this.switchPlayerButtonSelector);
  }
};
