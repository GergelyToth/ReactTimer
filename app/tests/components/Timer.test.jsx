var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Components/Timer');

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	describe('handleStatusChange', () => {
		it('should set state to started and start counting', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleStatusChange('started');

			expect(timer.state.timerStatus).toBe('started');

			setTimeout(() => {
				expect(timer.state.totalSeconds).toBe(1);
				done();
			}, 1001)
		});

		it('should pause timer and keep seconds', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.setState({totalSeconds: 10});
			timer.handleStatusChange('started')
			timer.handleStatusChange('paused');

			setTimeout(() => {
				expect(timer.state.timerStatus).toBe('paused');
				expect(timer.state.totalSeconds).toBe(10);
				done();
			}, 1001);
		});

		it('should stop timer and reset seconds', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.setState({totalSeconds: 10});
			timer.handleStatusChange('started');
			timer.handleStatusChange('stopped');

			setTimeout(() => {
				expect(timer.state.timerStatus).toBe('stopped');
				expect(timer.state.totalSeconds).toBe(0);
				done();
			}, 1001);
		});
	});
});