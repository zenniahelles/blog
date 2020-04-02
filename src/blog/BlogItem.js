import React from 'react';
import * as Markdown from 'react-markdown';
import moment from 'moment';
// import { Link } from 'react-router-dom';

  const BlogItem = (props) => (
    <div className="PostBox">

          <div className="Content">
            <h2 className="PostTitle">{props.title}</h2>
            <div className="PostContent"><Markdown source={props.content.split(" ").splice(0,150).join(" ").concat('...')} /></div>
          </div>
          

          <div className="DateContainer">
          <h4 className="Author"><span className="WrittenBy"><b>Author:</b></span> {props.author}</h4>
            <p> <span className="Posted"><b>Posted:</b></span>
              {moment(props.date).calendar(null, {
                sameDay: ' [Today]',
                lastDay: ' [Yesterday]',
                lastWeek: ' [Last] dddd',
                sameElse: ' MMM Do YYYY'
              })}
            </p>
        </div>

  </div>
  )

  export default BlogItem