let detailsRecords = {
    1: {
        id: 1,
        name: "Игорь Клечковский",
        prof: "Web Designer / UI",
        hobbies: ["Read", "out with friends", "listen to music"],
        skills: ["html5", "css3", "react", 'java8']
    },
    2: {
        id: 2,
        name: "John Doe",
        prof: "Nice guy",
        hobbies: ["Likes drinking wine"],
        skills: ["html", "javascript", "redux"]
    },
    3: {
        id: 3,
        name: "Mary Moe",
        prof: "Cute girl",
        hobbies: ["Likes playing xbox whole days long"],
        skills: ["Fortran", "Lua", "R#"]
    }
};

export function userDetailsReducer(state = detailsRecords, action) {
    switch (action.type) {
        default:
            return state
    }
}