import {compose} from 'recompose';
import {waitImgsIsLoaded} from '../../../hoc/waitImgsIsLoaded';
import {ConsultingTrainingComponent} from './consulting-training';

export const ConsultingTrainingContainer = compose(
  waitImgsIsLoaded(['/assets/background/ass.jpg'])
  )(ConsultingTrainingComponent);
