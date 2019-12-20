import React, { Component } from 'react';

import HeaderComponent from '../client/layout/header/header.js';
import FooterComponent from "../client/layout/footer/footer.js";
import NotesListComponent from '../client/components/NotesList/NotesList.js';

import { Http } from '../client/utils.js';

export default class PostPage extends Component {
    static async getInitialProps({query}) {
        let res = await Http.get("/notes/getNote", { key: query.id });
        return {
            note: res
        };
    }

    render() {
        return <div className="">
            <HeaderComponent />
            <div className="container markdown-body">
              <div dangerouslySetInnerHTML={{__html:this.props.note.content}}>
              </div>
              <span className="create-time has-gray">
                          {this.props.note.createdAt}
                        </span>
            </div>
            <FooterComponent/>
          </div>;
    }
} 
