import { Component, Prop, State } from '@stencil/core';


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

	componentWillLoad() {
        this.value = this.start;
    }

    increment() {
        const newValue = this.value + this.step;
        if (newValue > this.max) {
        	this.value = this.max;
        } else {
          	this.value = newValue;
        }
    }

	decrement() {
		const newValue = this.value - this.step;
		if (newValue < this.min) {
		  	this.value = this.min;
		} else {
		  	this.value = newValue;
		}
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
