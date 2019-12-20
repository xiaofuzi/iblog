import React, { Component } from 'react';

import Link from 'next/link';
import HeaderComponent from "../client/layout/header/header.js";
import FooterComponent from '../client/layout/footer/footer.js';
import NotesListComponent from '../client/components/NotesList/NotesList.js';

import { Http } from '../client/utils.js';
import './note.scss';
export default class HomePage extends Component {
    static async getInitialProps () {
        let res = await Http.get("/notes/notesList") || {};
        return {
            notesList: res['my-note'] || []
        };
    }

    render () {
        return <div className="micro-notes">
            <HeaderComponent />
            <div className="container markdown-body">
                <div>
                {
                    this.renderList()
                }
                </div>
            </div>
            <FooterComponent />
          </div>;
    }

    renderList = () => {
        let list = this.props.notesList|| [];
        return list.map((item, i) => {
            return (<div className="note-item" key={item.key}>
                        {this.renderTags(item.tags)}
                          <div dangerouslySetInnerHTML={{__html: item.content}}>
                          </div>
                        <span className="create-time has-gray">
                          {item.createdAt}
                        </span>
                      </div>)
        })
    }

    renderTags (tags = []) {
        return <span className='tags'>
            {tags.map((tag, i) => {
                return <span key={i} className='tag has-gray'>#{tag}</span>
            })}
        </span>
    }
} 
