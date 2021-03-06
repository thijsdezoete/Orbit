ig.module (
	'game.gamestates.score-state'
)
.requires (
	'game.gamestates.main-state'
)
.defines(function() {
	ScoreState = MainState.extend(ScoreState.prototype);
});

function ScoreState() {
}
ScoreState.prototype = {
	init: function(x, y, settings) {
		ig.input.bind(ig.KEY.MOUSE1, 'click_r');
	},
	update: function() {
		if (ig.input.pressed('click_r')) {
			ig.game.state_mgr.switchToState(ig.game.state_mgr.states.MENU);
		}
	},
	draw: function() {
		ig.game.font_big.draw('SCORE', ig.system.width / 2, 200, ig.Font.ALIGN.CENTER);
		ig.game.font.draw('Click to continue', ig.system.width / 2, 250, ig.Font.ALIGN.CENTER);
	},
	clear: function() {
	}
}