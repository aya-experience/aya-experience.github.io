import homePo from '../page_object/home.po';
import visionPo from '../page_object/vision.po';
import workPo from '../page_object/work.po';

describe('Retour sur la home page', () => {
    it('Depuis la page réalisation', () => {
      workPo.open();
      homePo.menu.quit();
      homePo.isOnPage();
    });

    it('Depuis la page vision', () => {
      visionPo.open();
      homePo.menu.quit();
      homePo.isOnPage();
    });
});
