export type Riddle = {
    id: string;
    contents: string;
    answers: {
        id: string;
        text: string;
    }[];
};
