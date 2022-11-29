const storage = {
    template: {
        volume1: {
            chapter1:{
                page1: require('./template/volume1/chapter1/1.png'),
                page2: require('./template/volume1/chapter1/2.png'),
                page3: require('./template/volume1/chapter1/3.png')
            },
            chapter2:{
                page1: require('./template/volume1/chapter2/1.png'),
                page2: require('./template/volume1/chapter2/2.png'),
                page3: require('./template/volume1/chapter2/3.png')
            }
        }
    },
    template2: {
        volume1: {
            chapter1:{
                page1: require('./template2/volume1/chapter1/1.png'),
                page2: require('./template2/volume1/chapter1/2.png'),
                page3: require('./template2/volume1/chapter1/3.png')
            }
        }
    },
    preview: {
        1: require('./preview/template.png'),
        2: require('./preview/template2.png')
    }
}

export default storage;
