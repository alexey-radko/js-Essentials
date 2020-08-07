import { Select } from './Select/select';
import './Select/style';

const s = new Select('#select', {
  placeholder: 'select one option',
  data: [
    { id: 1, value: 'React' },
    { id: 2, value: 'Angular' },
    { id: 3, value: 'Vue' },
    { id: 4, value: 'Next' },
    { id: 5, value: 'Nest' },
  ],
  selectedId: 4,
  onSelect(item) {
    console.log('you have selected: ', item);
  },
});

window.s = s;
