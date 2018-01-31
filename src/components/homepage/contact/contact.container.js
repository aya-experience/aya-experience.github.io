import {compose} from 'recompose';
import {ContactComponent} from './contact';
import {waitImgsIsLoaded} from '../../../hoc/waitImgsIsLoaded';

export const ContactContainer = compose(
    waitImgsIsLoaded(['/assets/background/mountain-night.jpg'])
  )(ContactComponent);
