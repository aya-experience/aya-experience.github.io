import {compose} from 'recompose';
import {VisionDigitalComponent} from './vision-digital';
import {waitImgsIsLoaded} from '../../../hoc/waitImgsIsLoaded';

export const VisionDigitalContainer = compose(
    waitImgsIsLoaded(['/assets/background/spark-light.jpg'])
  )(VisionDigitalComponent);
