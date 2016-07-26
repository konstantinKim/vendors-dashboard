const initialState = {  
  projects: 
  [
    {
      'id':1, 'name':'project name', 'address':'project address', 'number':'01', 'company':'Vendor Company', 'materials_hauled':'1', 'total_tons':'0', 'recycled':'0', 'rate':'50', 'tickets_count':'5', 
      'facilities':[
        {
          'id':1,
          'name':'Facility 1',
          'tickets':
          [
            {'id':1, 'ticket':'ticket number','material':'Material Name', 'submitted_by':'Submitted By', 'weight':'100', 'recycled':'50', 'rate':'90', 'date':'7/26/2016'},
            {'id':2, 'ticket':'ticket number','material':'Material Name', 'submitted_by':'Submitted By', 'weight':'100', 'recycled':'50', 'rate':'90', 'date':'7/26/2016'}
          ]
        }
      ]      
    },
    {
      'id':2, 'name':'project name2', 'address':'project address2', 'number':'02', 'company':'Vendor Company', 'materials_hauled':'2', 'total_tons':'2', 'recycled':'0', 'rate':'50', 'tickets_count':'5', 
      'facilities':[
        {
          'id':2,
          'name':'Facility 2',
          'tickets':
          [
            {'id':3, 'ticket':'ticket number','material':'Material Name', 'submitted_by':'Submitted By', 'weight':'100', 'recycled':'50', 'rate':'90', 'date':'7/26/2016'}
          ]
        }
      ]      
    }
  ]
}

export default function activeProjects(state = initialState) {
        return state
}