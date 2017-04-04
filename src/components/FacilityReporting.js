import React, { PropTypes, Component } from 'react'
//import * as numberFormat from '../helpers/numberFormat'

export default class FacilityReporting extends Component {
    componentWillMount(){                        
        //this.props.getCompletedProjects()        
    }      

    render() {              
        //const { facilities } = this.props                
        //const { imgHost } = this.props
        console.log(this.props)        
        var facilitiesListTemplate = 'Need explanation how we pull this data'
        
        return (
            <div>
                <div id="settings-container">
                    <div className="titles">
                        <div className="column-15">Process Line</div>
                        <div className="column-15">Reviewed By</div>
                        <div className="column-15">12M Rate W/ADC</div>
                        <div className="column-15">12M Rate WO/ADC</div>
                        <div className="column-10">Reports</div>
                        <div className="column-10">Data</div>
                        <div className="column-10">Updated at</div>
                        <div className="column-10 no-border">MO Data</div>
                    </div>
                </div>
                <div className='componentFacilitiesReporting' style={{'text-align':'center'}}>                          
                    {facilitiesListTemplate}            
                </div>  
            </div>
        )
    }
}

FacilityReporting.propTypes = {
    facilities: PropTypes.array.isRequired
}