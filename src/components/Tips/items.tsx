import axios from 'axios';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Teams',
    bgColor: '#172c4a',
    actions: axios.get('teams'),
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Classifications',
    bgColor: '#6a0159',
    actions: axios.get('classifications'),
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Players',
    bgColor: '#4139c8',
    actions: axios.get('players'),
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Estatium',
    bgColor: '#00ab4b',
    actions: axios.get('estadium'),
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Leagues',
    bgColor: '#ba2f76',
    actions: axios.get('leagues'),
  },
];

export default items;
