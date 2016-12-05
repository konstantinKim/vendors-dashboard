import React, { Component } from 'react'

export default class Find extends Component {           
  componentWillMount(){
    this.props.searchActions.getMaterials()
  }
  
  handleFormChange(e){        
    this.props.search[e.currentTarget.name] = e.currentTarget.value    
    return this.props.searchActions.updateState(this.props.search)
  }

  handleFormSubmit(e){        
    e.preventDefault()
    return this.props.searchActions.doSearch(this.props.search)
  }

  render() {    
    const { imgHost, search } = this.props
    var materialsList
    materialsList = search.materials.map(function (item) {
      return (        
          <option key={'mat_'+item.MATERIAL_ID} value={item.MATERIAL_ID}>{item.name}</option>        
      )
    })          
    return <div>            
        <div>
        <div className="container-gh" id="global-main-top-bar">
          <div className="row">
            <div className="col-ghgrid-8">
              <div style={{float: 'left'}}>
                <img src={imgHost + "/_images/icons/content/header-search.png"} style={{margin: 0, padding: '10px 0px 0px 12px'}} /><p>Recycler Finder</p>
              </div>
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="container-gh" id="global-main-content">
          {/* overview */}
          <div id="recycler-finder-container">
            <div className="header">Please enter a zip code, select a search radius and material type. </div>
            <div className="form">
              <div className="titles">
                <div className="column-5">&nbsp;</div>
                <div className="column-15">ZIP OR POSTAL CODE</div>
                <div className="column-1">&nbsp;</div>
                <div className="column-15">RADIUS</div>
                <div className="column-1">&nbsp;</div>
                <div className="column-47">MATERIAL</div>
                <div className="column-1">&nbsp;</div>
                <div className="column-10">&nbsp;</div>
                <div className="column-5">&nbsp;</div>
              </div>
              <form name method action="">
                <div className="column-5">&nbsp;</div>
                <div className="column-15"><input type="text" onChange={::this.handleFormChange} name="zipcode" /></div>
                <div className="column-1">&nbsp;</div>
                <div className="column-15">
                  <select onChange={::this.handleFormChange} name="radius">
                    <option value={5}>5</option><option value={10}>10</option><option value={20}>20</option><option value={50}>50</option>
                  </select>
                </div>
                <div className="column-1">&nbsp;</div>
                <div className="column-47">
                  <select onChange={::this.handleFormChange} name="MATERIAL_ID">
                    <option value='0'>Select Material</option>
                    {materialsList}
                  </select>
                </div>
                <div className="column-1">&nbsp;</div>
                <div className="column-10"><input className="button-search" type="submit" defaultValue="SEARCH" /></div>
                <div className="column-5">&nbsp;</div>
              </form>
            </div>
          </div>
        </div>
        {/* end recycler finder */}
      </div>

    </div>
  }
}
