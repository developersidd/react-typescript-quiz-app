export type IOption = {
    id: number,
    isCorrect: boolean,
    selected: boolean,
    value: string,

}
export type IQuiz = {
    id: number,
    title: string,
    options: IOption[],
    isPassed: null | boolean,
}

export const data: IQuiz[] = [
    {
        id: 1,
        title: "When was js invented ?",
        isPassed: null,
        options: [
            {
                id: 1,
                isCorrect: true,
                selected: false,
                value: "1995",

            },

            {
                id: 2,
                isCorrect: false,
                selected: false,
                value: "1996",

            },
            {
                id: 3,
                isCorrect: false,
                selected: false,
                value: "1994",

            },
            {
                id: 4,
                isCorrect: false,
                selected: false,
                value: "1971",

            },
        ]
    },
    {
        id: 2,
        title: "Who was invented js ?",
        isPassed: null,
        options: [
            {
                id: 1,
                isCorrect: false,
                selected: false,
                value: "AB Siddik",

            },

            {
                id: 2,
                isCorrect: false,
                selected: false,
                value: "Mark Zuckerberg",

            },
            {
                id: 3,
                isCorrect: false,
                selected: false,
                value: "john sina",

            },
            {
                id: 4,
                isCorrect: true,
                selected: false,
                value: "Brendan Each",

            },
        ]
    },
    {
        id: 3,
        title: "When Typescript Introduced ?",
        isPassed: null,
        options: [
            {
                id: 1,
                isCorrect: false,
                selected: false,
                value: "2 October 2013",

            },

            {
                id: 2,
                isCorrect: true,
                selected: false,
                value: "1 October 2012",

            },
            {
                id: 3,
                isCorrect: false,
                selected: false,
                value: "5 October 2015",

            },
            {
                id: 4,
                isCorrect: false,
                selected: false,
                value: "9 October 2014",

            },
        ]
    },
    {
        id: 4,
        title: "When The first version of HTML was written ?",
        isPassed: null,
        options: [
            {
                id: 1,
                isCorrect: false,
                selected: false,
                value: "1998",

            },

            {
                id: 2,
                isCorrect: true,
                selected: false,
                value: "1993",

            },
            {
                id: 3,
                isCorrect: false,
                selected: false,
                value: "1999",

            },
            {
                id: 4,
                isCorrect: false,
                selected: false,
                value: "1997",

            },
        ]
    },
    {
        id: 5,
        title: "When The first version of CSS was written ?",
        isPassed: null,
        options: [
            {
                id: 1,
                isCorrect: false,
                selected: false,
                value: "1988",

            },

            {
                id: 2,
                isCorrect: false,
                selected: false,
                value: "1994",

            },
            {
                id: 3,
                isCorrect: true,
                selected: false,
                value: "1996",

            },
            {
                id: 4,
                isCorrect: false,
                selected: false,
                value: "1999",

            },
        ]
    }
]