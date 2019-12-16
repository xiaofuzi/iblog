import 'bulma';
import './header.scss';
import '../common/markdown.scss';

import { Component } from 'react';

export default class Header extends Component {
    state = {
        isActive: ''
    }

    render () {
        return <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <img style={{ maxHeight: "none" }} src="/static/img/logo.png" width="112" height="28" />
                </a>
                <div onClick={() => {this.toggleNavActiveClass(this.state.isActive)}} 
                    className={'navbar-burger burger ' + this.state.isActive} data-target="navMenuDocumentation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
              </div>
                <div onClick={() => { this.toggleNavActiveClass(this.state.isActive) }} 
                    className={"navbar-menu " + this.state.isActive}>
                <div className="navbar-end">
                  <a href="/posts" className="navbar-item">文章</a>
                  <a href="/notes"
                     className="navbar-item">小记</a>
                  <a href='/post/b6a712c8-2149-4fb7-be48-5114edee5967/'
                     className="navbar-item">导航</a>
                  
                  <a href="/post/1cd18e7b-ae28-4f47-9781-4f7ecae2488c/"
                     className="navbar-item">关于</a>
                </div>
              </div>
            </div>
          </nav>;
    }

    toggleNavActiveClass = (classState) => {
        if (classState) {
            this.setState({
                isActive: ''
            });
        } else {
            this.setState({
                isActive: 'is-active'
            })
        }
    }
}

/*
<Link href='/'><a className="navbar-item">首页</a></Link>
<Link href='/post?id=e512e8fdd5418f746eca'><a className="navbar-item">Lab</a></Link>
*/