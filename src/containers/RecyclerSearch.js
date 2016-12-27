import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Find from '../components/search/find'

import * as searchActions from '../actions/search/SearchActions'

import { IMG_HOST } from '../config/settings'

class RecyclerSearch extends Component {  
  renderTab(){
    const { search, searchActions } = this.props
    if(search.currentTab == 'find'){
        return(<Find imgHost={IMG_HOST} search={search} searchActions={searchActions}  />);                    
    }    
    if(search.currentTab == 'results'){
        //return(<Results imgHost={IMG_HOST} search={search} searchActions={searchActions}  />);                    
    }    
  }

  render() {        
    return <div>
            <Header imgHost={IMG_HOST} activeTab={this.props.search.currentTab}   />                   
            {this.renderTab()}
    </div>
  }
}

function mapStateToProps(state) {
  return {    
    search: state.search,    
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    searchActions: bindActionCreators(searchActions, dispatch),    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecyclerSearch)