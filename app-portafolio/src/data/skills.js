import javascriptIcon from '../images/skills/javascript.svg';
import htmlIcon from '../images/skills/html.svg';
import cssIcon from '../images/skills/css.svg';
import reactIcon from '../images/skills/react.svg';
import reduxIcon from '../images/skills/redux.svg';
import mysqlIcon from '../images/skills/mysql.svg';
import mongodbIcon from '../images/skills/mongodb.svg';
import nodejsIcon from '../images/skills/nodejs.svg';

const data = [
  {
    id: 1,
    dev: 'Frontend',
    list: [
      {
        id: 1,
        name: 'Javascript',
        icon: javascriptIcon,
      },
      {
        id: 2,
        name: 'Html',
        icon: htmlIcon,
      },
      {
        id: 3,
        name: 'Css',
        icon: cssIcon,
      },
      {
        id: 4,
        name: 'React',
        icon: reactIcon,
      },
      {
        id: 5,
        name: 'Redux',
        icon: reduxIcon,
      }
    ]
  },
  {
    id: 2,
    dev: 'Backend',
    list: [
      {
        id: 1,
        name: 'MySQL',
        icon: mysqlIcon,
      },
      {
        id: 2,
        name: 'MongoDB',
        icon: mongodbIcon,
      },
      {
        id: 3,
        name: 'NodeJS',
        icon: nodejsIcon,
      },
    ],
  },
];

export default data;
