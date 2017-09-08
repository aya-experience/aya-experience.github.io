import {compose} from 'recompose';
import {QualityMethodComponent} from './quality-method';
import {waitImgsIsLoaded} from '../../../hoc/waitImgsIsLoaded';

export const QualityMethodContainer = compose(
    waitImgsIsLoaded(['/assets/background/hand-join.jpg'])
  )(QualityMethodComponent);
