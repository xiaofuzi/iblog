import React, { Component } from 'react';

import Link from 'next/link';
import HeaderComponent from "../client/layout/header/header.js";
import FooterComponent from '../client/layout/footer/footer.js';
import NotesListComponent from '../client/components/NotesList/NotesList.js';

import { Http } from '../client/utils.js';

export default class HomePage extends Component {
    static async getInitialProps () {
        let res = await Http.get("/notes/notesList");
        return {
            notesList: res['my-note'] || []
        };
    }

    render () {
        return <div className="">
            <HeaderComponent />
            <div className="container markdown-body">
                {
                    this.renderList()
                }
            </div>
            <FooterComponent />
          </div>;
    }

    renderList = () => {
        let list = this.props.notesList|| [];
        return list.map((item) => {
            return (<div className="note-item" key={item.key}>
                          
                          <div dangerouslySetInnerHTML={{__html: item.content}}>
                              
                          </div>
                        <span className="create-time">
                          {item.createdAt}
                        </span>
                      </div>)
        })
    }
} 
