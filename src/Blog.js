import React from 'react';
import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem.js'
import PageHeader from './components/PageHeader.js'
import SidePanel from './blog/SidePanel.js';
import plant from './images/plant.jpg';

class Blog extends React.Component {

state = {
    posts: []
}


client = contentful.createClient({
  space: '045hksy3xgxd',
  accessToken: '2MiARqsuvTP77OqIaki1u48BK9oKMHhi25E_zQXyC4A' 
})

componentDidMount() {
    this.fetchPosts().then(this.setPosts);
}

fetchPosts = () => this.client.getEntries()


setPosts = response => {
    this.setState({
        posts: response.items
    })
}

render() {
    return(
<div className="wrapper">

<PageHeader />

  <div className="SiteGrid">
    <div>
  <img className="ProfilePhoto" src={plant} alt="plants"/>
    <div className="SidePanel">
      <p className="Latest">Latests posts:</p>
      { this.state.posts.slice(0,5).map(({fields}, i) =>
      <SidePanel key ={i} {...fields} />
      )}
    </div>
    </div>


    <div className="Main">
      { this.state.posts.map(({fields}, i) =>
      <BlogItem key={i} {...fields} />
      )}
    </div>
  </div>
</div>
        )
    }
}

export default Blog