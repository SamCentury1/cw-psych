const instructions = [
    {
        step: "1",
        title: "Introduction",
        body: "This part of the questionnaire will be completed in this 5-step wizard. Please start by entering your participant ID from the Qualtrix questionnaire",
        completed: false
    },

    {
        step: "2",
        title: "Selecting Attributes",
        body: " Please read through the list below and PLACE AN 'X' on the line next to each attribute that is Important to how you have felt about yourself in the last four weeks",
        completed: false
    },    

    {
        step: "3",
        title: "Ranking Attributes",
        body: "Now, look over the attributes you have selected, and rank order them in terms of how much your opinion of yourself in the last four weeks has been based on each attribute, The numbers should not necessarily reflect how satisfied you have been with the attribute, but rather how important the attribute has been to how you feel about yourself.",
        completed: false
    },

    {
        step: "4",
        title: "Scoring Attributes",
        body: "Using the attributes you selected, DIVIDE THE CIRCLE below so that the size of each section is a reflection of how much your opinion of yourself in the last four weeks has been based on that attribute (larger pieces should indicate that a greater part of your opinion of yourself has been based on that attribute, for example). Place the letters corresponding to the attributes inside the pieces of the circle.",
        completed: false
    },

    {
        step: "5",
        title: "Confirm & submit",
        body: "Take a look at the data and make sure it's accurate to the best of your understanding - before submitting.",
        completed: false
    },    
]

export default instructions
