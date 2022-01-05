
const SceneInfo = [
    {
        type:'sticky',
        heightNum:8,
        scrollHeight:0,
        values: {
                messageA_opacity_in: [0, 1, { start: 0.01, end: 0.1 }],
                messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
                messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
                messageA_translateY_in: [20, 0, { start: 0.01, end: 0.1 }],
                messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
                messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
                messageA_opacity_out: [1, 0, { start: 0.13, end: 0.15 }],
                messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
                messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
                messageA_translateY_out: [0, -20, { start: 0.13, end: 0.15 }],
                messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
                messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
        }
    }
];


export default SceneInfo;