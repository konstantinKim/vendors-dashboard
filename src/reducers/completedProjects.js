const initialState = {  
  projects: 
  [
    {
      'id':9, 'name':'Completed project name', 'address':'project address', 'number':'01', 'company':'Vendor Company', 'materials_hauled':'1', 'total_tons':'0', 'recycled':'0', 'rate':'50', 'tickets_count':'5', 
      'facilities':[
        {
          'id':9,
          'name':'Facility 1',
          'tickets':
          [
            {'id':1, 'ticket':'ticket number','material':'Material Name', 'submitted_by':'Submitted By', 'weight':'100', 'recycled':'50', 'rate':'90', 'date':'7/26/2016'},
            {'id':2, 'ticket':'ticket number','material':'Material Name', 'submitted_by':'Submitted By', 'weight':'100', 'recycled':'50', 'rate':'90', 'date':'7/26/2016'}
          ]
        }
      ]      
    }
  ]
}

export default function completedProjects(state = initialState) {
        return state
}