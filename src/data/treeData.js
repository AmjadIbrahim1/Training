// Import local images
import mohamedAlkadyImg from '../assets/images/people/mohamed-alkady.jpg';
import amanyImg from '../assets/images/people/amany.jpg';
import nadaImg from '../assets/images/people/nada.jpg';
import khadijaImg from '../assets/images/people/khadija.jpg';
import mohamedSayedImg from '../assets/images/people/mohamed-sayed.jpg';
import amjadImg from '../assets/images/people/amjad.jpg';
import ghadaImg from '../assets/images/people/ghada.jpg';
import dianaImg from '../assets/images/people/diana.jpg';
import zahraaImg from '../assets/images/people/zahraa.jpg';
import ahmedYasserImg from '../assets/images/people/ahmed-yasser.jpg';

export const treeData = {
  roots: [
    {
      id: 'root1',
      name: 'محمد القاضي',
      avatar: mohamedAlkadyImg,
      linkedin: 'https://www.linkedin.com/in/mohamedalkady-cp/',
      children: [
        {
          id: 'node1',
          name: 'أمانى محمد',
          avatar: amanyImg,
          linkedin: 'https://www.linkedin.com/in/amanymsadky/'
        },
        {
          id: 'node2',
          name: 'ندى حسنين',
          avatar: nadaImg,
          linkedin: 'https://www.linkedin.com/in/nada-hassanin-5989a933b/'
        },
        {
          id: 'node3',
          name: 'رؤى هشام',
          avatar: null, // مفيش صورة لرؤى في المجلد
          linkedin: 'https://www.linkedin.com/in/roaa-hisham-sharafeldin-5182b9280/'
        },
        {
          id: 'node4',
          name: 'محمد سيد',
          avatar: mohamedSayedImg,
          linkedin: 'https://www.linkedin.com/in/mohamed-sayed-099130372/'
        },
        {
          id: 'node5',
          name: 'عمر صلاح',
          avatar: null, // مفيش صورة لعمر في المجلد
          linkedin: 'https://www.linkedin.com/in/omar-matar-44220031a/'
        },
        {
          id: 'node6',
          name: 'خديجة سامى',
          avatar: khadijaImg,
          linkedin: 'https://www.linkedin.com/in/khadijasamy/'
        }
      ]
    },
    {
      id: 'root2',
      name: 'أمجد إبراهيم',
      avatar: amjadImg,
      linkedin: 'https://www.linkedin.com/in/amjad-ibrahim-5a647525a/',
      children: [
        {
          id: 'node7',
          name: 'غادة محمد',
          avatar: ghadaImg,
          linkedin: 'https://www.linkedin.com/in/ghada-mohamed-8b12b53a4'
        },
        {
          id: 'node8',
          name: 'ديانا إيميل',
          avatar: dianaImg,
          linkedin: 'https://www.linkedin.com/in/diana-emil-19a91a338'
        },
        {
          id: 'node9',
          name: 'الزهراء نور',
          avatar: zahraaImg,
          linkedin: 'https://www.linkedin.com/in/al-zahraa-nour-70047b380/'
        },
        {
          id: 'node10',
          name: 'أحمد ياسر',
          avatar: ahmedYasserImg,
          linkedin: 'https://www.linkedin.com/in/ahmed-yasser-358536297'
        }
      ]
    }
  ]
};

export default treeData;