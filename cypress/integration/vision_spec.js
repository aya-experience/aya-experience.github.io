import visionPo from '../page_object/vision.po';

describe('Page vision', () => {
        it('Je suis sur intro, Je clique sur la flêche, je passe sur la page gui', () => {
            visionPo.open('intro');
            visionPo.next();
            visionPo.isOnPage('gui');
        });
});
