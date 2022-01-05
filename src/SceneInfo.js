
const SceneInfo = [
    {
        type:'sticky',
        heightNum:8,
        scrollHeight:0,
        values: {
                messageA_opacity_in: [0, 1, { start: 0.01, end: 0.1 }],
                messageB_opacity_in: [0, 1, { start: 0.21, end: 0.3 }],
                messageC_opacity_in: [0, 1, { start: 0.41, end: 0.5 }],
                messageA_translateY_in: [20, 0, { start: 0.01, end: 0.1 }],
                messageB_translateY_in: [20, 0, { start: 0.21, end: 0.3 }],
                messageC_translateY_in: [20, 0, { start: 0.41, end: 0.5 }],
                messageA_opacity_out: [1, 0, { start: 0.11, end: 0.2 }],
                messageB_opacity_out: [1, 0, { start: 0.31, end: 0.4 }],
                messageC_opacity_out: [1, 0, { start: 0.51, end: 0.6 }],
                messageA_translateY_out: [0, -20, { start: 0.11, end: 0.2 }],
                messageB_translateY_out: [0, -20, { start: 0.31, end: 0.4 }],
                messageC_translateY_out: [0, -20, { start: 0.51, end: 0.6 }],
        }
    }
];


export default SceneInfo;