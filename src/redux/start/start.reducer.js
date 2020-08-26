const INITIAL_STATE = {
  data: [
    { name: 'one', value: false, header:'Investigation Techniques', text: 'Apply structured techniques to investigate wants, ' +
        'needs, problems and opportunities Document the current situation and apply relevant ' +
        'techniques to structure information Assist in the recommendation of business and IS changes' },
    { name: 'two', value: false, header:'Business Process Modelling', text: 'Model business situations with clearly defined ' +
        'boundaries using contemporary modelling techniques and digital modelling tools Analyse business process models to ' +
        'identify opportunities for improvement Redesign business process models using different scenarios and different ' +
        'solution models' },
    { name: 'three', value: false, header:'Requirements Engineering and Management', text: 'Elicit requirements from stakeholders ' +
        'to identify business and user needs Analyse, validate, prioritise and document functional and non-functional requirements ' +
        'for business situations Identify data requirements relating to business improvement Assist in the management and ' +
        'controlled change of requirements' },
    { name: 'four', value: false, header:'Data Modelling', text: 'Create data models to illustrate how data is represented within a business ' +
        'system Revise the data model in accordance with different proposed solutions' },
    { name: 'five', value: false, header:'Stakeholder Analysis and Management', text: 'Identify stakeholders impacted by a proposed change, ' +
        'understand their perspectives and assess how their interests are best managed' },
    { name: 'six', value: false, header:'Business Impact Assessment', text: 'Assess and document the drivers, costs, benefits and impacts of a proposed business change' }
  ]
};

const startReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default startReducer;
