import React, { Component } from 'react';

import Link from 'next/link';
import HeaderComponent from "../client/layout/header/header.js";
import FooterComponent from '../client/layout/footer/footer.js';
import NotesListComponent from '../client/components/NotesList/NotesList.js';

import { Http } from '../client/utils.js';
import Config from '../config.js';

export default class HomePage extends Component {
    static async getInitialProps() {
        let res = await Http.get("/notes/notesList");
        return { notesList: res[Config.noteType.papers].map(
            (item, index) => {
              item.newTitle = item.title;
              let l = res[Config.noteType.papers].length;
              index = l - index;
              item.title = "第" + index + "期";

              return item;
            }
          ) 
        };
    }

    render () {
        return <div className="">
            <HeaderComponent />
            <div className="container markdown-body">
              <h2>Weekly：</h2>
              <NotesListComponent items={this.props.notesList}/>
            </div>
            <FooterComponent />
          </div>;
    }
} 
