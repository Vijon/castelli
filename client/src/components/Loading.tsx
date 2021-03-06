import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /*background-color: #fff;*/

    > * {
        display: block;
        align-self: flex-end;
    }

    



.cssload-container {
	width: 72px;
	margin: 58px auto;
	font-size: 0;
	position: relative;
	transform-origin: 50% 50%;
		-o-transform-origin: 50% 50%;
		-ms-transform-origin: 50% 50%;
		-webkit-transform-origin: 50% 50%;
		-moz-transform-origin: 50% 50%;
	animation: cssload-clockwise 6.9s linear infinite;
		-o-animation: cssload-clockwise 6.9s linear infinite;
		-ms-animation: cssload-clockwise 6.9s linear infinite;
		-webkit-animation: cssload-clockwise 6.9s linear infinite;
		-moz-animation: cssload-clockwise 6.9s linear infinite;
}
.cssload-container:before {
	position: absolute;
	content: '';
	top: 0;
	left: 0;
	width: 39px;
	height: 39px;
	border: 6px solid rgb(229,229,229);
	border-radius: 100%;
		-o-border-radius: 100%;
		-ms-border-radius: 100%;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
	box-sizing: border-box;
		-o-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
}
.cssload-container:after {
	position: absolute;
	content: '';
	z-index: -1;
	top: 0;
	right: 0;
	width: 39px;
	height: 39px;
	border: 6px solid rgb(229,229,229);
	border-radius: 100%;
		-o-border-radius: 100%;
		-ms-border-radius: 100%;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
	box-sizing: border-box;
		-o-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
}

.cssload-lt, .cssload-rt, .cssload-lb, .cssload-rb {
	position: relative;
	display: inline-block;
	overflow: hidden;
	width: 39px;
	height: 19px;
	opacity: 1;
}
.cssload-lt:before, .cssload-rt:before, .cssload-lb:before, .cssload-rb:before {
	position: absolute;
	content: '';
	width: 39px;
	height: 39px;
	border-top: 6px solid rgb(0,0,0);
	border-right: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-left: 6px solid transparent;
	border-radius: 100%;
		-o-border-radius: 100%;
		-ms-border-radius: 100%;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
	box-sizing: border-box;
		-o-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	-moz-box-sizing: border-box;
}

.cssload-lt {
	margin-right: -6px;
	animation: cssload-lt 2.3s linear -2300ms infinite;
		-o-animation: cssload-lt 2.3s linear -2300ms infinite;
		-ms-animation: cssload-lt 2.3s linear -2300ms infinite;
		-webkit-animation: cssload-lt 2.3s linear -2300ms infinite;
		-moz-animation: cssload-lt 2.3s linear -2300ms infinite;
}
.cssload-lt:before {
	top: 0;
	left: 0;
	animation: cssload-not-clockwise 1.15s linear infinite;
		-o-animation: cssload-not-clockwise 1.15s linear infinite;
		-ms-animation: cssload-not-clockwise 1.15s linear infinite;
		-webkit-animation: cssload-not-clockwise 1.15s linear infinite;
		-moz-animation: cssload-not-clockwise 1.15s linear infinite;
}

.cssload-rt {
	animation: cssload-lt 2.3s linear -1150ms infinite;
		-o-animation: cssload-lt 2.3s linear -1150ms infinite;
		-ms-animation: cssload-lt 2.3s linear -1150ms infinite;
		-webkit-animation: cssload-lt 2.3s linear -1150ms infinite;
		-moz-animation: cssload-lt 2.3s linear -1150ms infinite;
}
.cssload-rt:before {
	top: 0;
	right: 0;
	animation: cssload-clockwise 1.15s linear infinite;
		-o-animation: cssload-clockwise 1.15s linear infinite;
		-ms-animation: cssload-clockwise 1.15s linear infinite;
		-webkit-animation: cssload-clockwise 1.15s linear infinite;
		-moz-animation: cssload-clockwise 1.15s linear infinite;
}

.cssload-lb {
	margin-right: -6px;
	animation: cssload-lt 2.3s linear -1725ms infinite;
		-o-animation: cssload-lt 2.3s linear -1725ms infinite;
		-ms-animation: cssload-lt 2.3s linear -1725ms infinite;
		-webkit-animation: cssload-lt 2.3s linear -1725ms infinite;
		-moz-animation: cssload-lt 2.3s linear -1725ms infinite;
}
.cssload-lb:before {
	bottom: 0;
	left: 0;
	animation: cssload-not-clockwise 1.15s linear infinite;
		-o-animation: cssload-not-clockwise 1.15s linear infinite;
		-ms-animation: cssload-not-clockwise 1.15s linear infinite;
		-webkit-animation: cssload-not-clockwise 1.15s linear infinite;
		-moz-animation: cssload-not-clockwise 1.15s linear infinite;
}

.cssload-rb {
	animation: cssload-lt 2.3s linear -575ms infinite;
		-o-animation: cssload-lt 2.3s linear -575ms infinite;
		-ms-animation: cssload-lt 2.3s linear -575ms infinite;
		-webkit-animation: cssload-lt 2.3s linear -575ms infinite;
		-moz-animation: cssload-lt 2.3s linear -575ms infinite;
}
.cssload-rb:before {
	bottom: 0;
	right: 0;
	animation: cssload-clockwise 1.15s linear infinite;
		-o-animation: cssload-clockwise 1.15s linear infinite;
		-ms-animation: cssload-clockwise 1.15s linear infinite;
		-webkit-animation: cssload-clockwise 1.15s linear infinite;
		-moz-animation: cssload-clockwise 1.15s linear infinite;
}

@keyframes cssload-clockwise {
	0% {
		transform: rotate(-45deg);
	}
	100% {
		transform: rotate(315deg);
	}
}

@-o-keyframes cssload-clockwise {
	0% {
		-o-transform: rotate(-45deg);
	}
	100% {
		-o-transform: rotate(315deg);
	}
}

@-ms-keyframes cssload-clockwise {
	0% {
		-ms-transform: rotate(-45deg);
	}
	100% {
		-ms-transform: rotate(315deg);
	}
}

@-webkit-keyframes cssload-clockwise {
	0% {
		-webkit-transform: rotate(-45deg);
	}
	100% {
		-webkit-transform: rotate(315deg);
	}
}

@-moz-keyframes cssload-clockwise {
	0% {
		-moz-transform: rotate(-45deg);
	}
	100% {
		-moz-transform: rotate(315deg);
	}
}

@keyframes cssload-not-clockwise {
	0% {
		transform: rotate(45deg);
	}
	100% {
		transform: rotate(-315deg);
	}
}

@-o-keyframes cssload-not-clockwise {
	0% {
		-o-transform: rotate(45deg);
	}
	100% {
		-o-transform: rotate(-315deg);
	}
}

@-ms-keyframes cssload-not-clockwise {
	0% {
		-ms-transform: rotate(45deg);
	}
	100% {
		-ms-transform: rotate(-315deg);
	}
}

@-webkit-keyframes cssload-not-clockwise {
	0% {
		-webkit-transform: rotate(45deg);
	}
	100% {
		-webkit-transform: rotate(-315deg);
	}
}

@-moz-keyframes cssload-not-clockwise {
	0% {
		-moz-transform: rotate(45deg);
	}
	100% {
		-moz-transform: rotate(-315deg);
	}
}

@keyframes cssload-lt {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 1;
	}
	26% {
		opacity: 0;
	}
	75% {
		opacity: 0;
	}
	76% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
}

@-o-keyframes cssload-lt {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 1;
	}
	26% {
		opacity: 0;
	}
	75% {
		opacity: 0;
	}
	76% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
}

@-ms-keyframes cssload-lt {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 1;
	}
	26% {
		opacity: 0;
	}
	75% {
		opacity: 0;
	}
	76% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
}

@-webkit-keyframes cssload-lt {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 1;
	}
	26% {
		opacity: 0;
	}
	75% {
		opacity: 0;
	}
	76% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
}

@-moz-keyframes cssload-lt {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 1;
	}
	26% {
		opacity: 0;
	}
	75% {
		opacity: 0;
	}
	76% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
}
`;

export const Loading = () => {
    return (
        <Box>
            <div className="cssload-container">
                <div className="cssload-lt"></div>
                <div className="cssload-rt"></div>
                <div className="cssload-lb"></div>
                <div className="cssload-rb"></div>
            </div>
        </Box>
    );
}