import * as React from "react";
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from "react-router";
import { mergeProps } from '../helpers';

// Scroll restoration based on https://reacttraining.com/react-router/web/guides/scroll-restoration. 
class ScrollToTopWithoutRouter extends React.Component<RouteComponentProps<any>> {
    componentDidUpdate(prevProps: Readonly<RouteComponentProps<any>>) {
        if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
        }
    }

    render(): JSX.Element{
        return null;
    }
}
const ScrollToTop = withRouter( connect( null, null, mergeProps )(ScrollToTopWithoutRouter));

export default ScrollToTop;