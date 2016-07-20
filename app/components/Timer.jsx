var React = require('react');

var Clock = require('Components/Clock');
var Controls = require('Components/Controls');

var Timer = React.createClass({
	getInitialState: function() {
		return {
			totalSeconds: 0,
			timerStatus: 'paused',
		}
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({
						totalSeconds: 0
					});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
			}
		}
	},
	handleStatusChange: function(newStatus) {
		this.setState({
			timerStatus: newStatus
		});
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			this.setState({
				totalSeconds: this.state.totalSeconds + 1
			});
		}, 1000);
	},
	render: function() {
		var {totalSeconds, timerStatus} = this.state;

		return (
			<div className="timer">
				<h1 className="page-title">Timer</h1>
				<Clock totalSeconds={totalSeconds}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		);
	}
});

module.exports = Timer;