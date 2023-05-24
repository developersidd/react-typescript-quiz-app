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
    }
]