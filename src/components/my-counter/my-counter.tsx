import { Component, Prop, State, Event, EventEmitter/*, Listen*/ } from '@stencil/core';


@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.scss'
})
export class MyName {

  	@Prop() start: number = 1;
  	@Prop() max: number = 100;
  	@Prop() min: number = 0;
	@Prop() step: number = 1;

	@State() value: number;

	@Event() message: EventEmitter;

	/*
	@Listen('message')
      messageHandler(event: CustomEvent) {
        console.log('Received the custom message event: ', event.detail);
      }
     */

	componentWillLoad() {
        this.value = this.start;
    }

    increment() {
        const newValue = this.value + this.step;
        this.value = newValue > this.max ? this.max : newValue;
        this.message.emit(this.value);
    }

	decrement() {
		const newValue = this.value - this.step;
		this.value = newValue < this.min ? this.min : newValue;
		this.message.emit(this.value);
	}

	render() {
		return (
			<div>
				<button type="button" onClick={() => this.increment()}>
					+
				</button>
				<span>
					{this.value}
				</span>
				<button type="button" onClick={() => this.decrement()}>
					-
				</button>
			</div>
		);
	}
}
