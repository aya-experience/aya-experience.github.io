import agencePo from '../page_object/agence.po';
import homePo from '../page_object/home.po';

describe('Page Agence', () => {
	it('La page agence ne modifie pas le style globale', () => {
		// Given Je suis sur la page agence
		agencePo.open();
		// When je clique sur le back button
		agencePo.menu.quit();
		// Then Je suis rediriger sur la home
		homePo.isOnPage();
		// And le background est noir
		homePo.isBgBlack();
	});

	it('La page agence a un body bleu au lancement', () => {
		agencePo.open();
		agencePo.isBgBlue();
	});
});
