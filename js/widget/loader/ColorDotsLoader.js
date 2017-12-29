/**
 * Created by wangdi on 24/12/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Animated, ART, Easing} from 'react-native';
const {Surface, Group} = ART;
import AnimatedCircle from '../animated/AnimatedCircle';

export default class ColorDotsLoader extends Component {
    static propTypes = {
        size: PropTypes.number,
        betweenSpace: PropTypes.number,
        color1: PropTypes.string,
        color2: PropTypes.string,
        color3: PropTypes.string
    };

    static defaultProps = {
        size: 15,
        betweenSpace: 7,
        color1: '#ff4500',
        color2: '#ffd700',
        color3: '#9acd32'
    };

    constructor(props) {
        super(props);
        const red = this.props.color1;
        const yellow = this.props.color2;
        const green = this.props.color3;
        this.state = {
            colors: [red, red, red],
            color: yellow,
            x: new Animated.Value(-this.props.size / 2)
        };
        this.patterns = [
            [yellow, red, red],
            [yellow, yellow, red],
            [yellow, yellow, yellow],
            [green, yellow, yellow],
            [green, green, yellow],
            [green, green, green],
            [red, green, green],
            [red, red, green],
            [red, red, red],
        ];
        this._animation = this._animation.bind(this);
        this.timers = [];
    }

    render() {
        const {size, betweenSpace} = this.props;
        return (
            <Surface width={size*3 + betweenSpace*2} height={size}>
                <Group>
                    {this.state.colors.map((item, i) => {
                        return <AnimatedCircle key={i} fill={item} radius={size} x={size/2 + i * (size+betweenSpace)}
                                               y={size/2}/>
                    })}
                    <AnimatedCircle fill={this.state.color} radius={size} x={this.state.x} y={size/2}/>
                </Group>
            </Surface>
        );
    }

    componentDidMount() {
        this._animation();
    }

    componentWillUnmount(){
        this.unmounted = true;
        this.timers.forEach((id)=>{
            clearTimeout(id);
        });
    }

    _animation() {
        const {size, betweenSpace, color1, color2, color3} = this.props;
        const id1 = setTimeout(()=>{this.setState({color: color3})}, 600);
        const id2 = setTimeout(()=>{this.setState({color: color1})}, 1200);
        this.timers.push(id1);
        this.timers.push(id2);
        this.patterns.forEach((item, i)=>{
            const id = setTimeout(()=>{
                this.setState({colors: this.patterns[i]});
            }, i*200+100);
            this.timers.push(id);
        });

        Animated.sequence([
            Animated.timing(this.state.x, {
                toValue: size * 3 + betweenSpace * 2 + size / 2,
                duration: 600,
                easing: Easing.linear}),
            Animated.timing(this.state.x, {
                toValue: -size / 2,
                duration: 0}),
            Animated.timing(this.state.x, {
                toValue: size * 3 + betweenSpace * 2 + size / 2,
                duration: 600,
                easing: Easing.linear}),
            Animated.timing(this.state.x, {
                toValue: -size / 2,
                duration: 0}),
            Animated.timing(this.state.x, {
                toValue: size * 3 + betweenSpace * 2 + size / 2,
                duration: 600,
                easing: Easing.linear})
        ]).start(() => {
            if(!this.unmounted) {
                this.state.x.setValue(-size / 2);
                this.setState({color: color2});
                this._animation();
            }
        });
    }
}