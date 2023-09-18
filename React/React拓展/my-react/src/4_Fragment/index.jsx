import React, { Component, Fragment } from 'react'

export default class index extends Component {
    render() {
        return (
            /* Fragment可以作为一个根标签 但是不会被浏览器渲染出来 */
            <Fragment>
                <div></div>
                <div></div>
                <div></div>
            </Fragment>
        )
    }
}
