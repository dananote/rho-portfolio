import Portfolio from '@/app/portfolio/component/PortFolio';
import '@/css/portfolioGroup.css';

const MockCardData = [
  {
    id: 1,
    cardTitle: 'Card 1',
    loadingColor: '#ffffff',
    lenderImage: '',
  },
  {
    id: 2,
    cardTitle: 'Card 2',
    loadingColor: '#000000',
    lenderImage: '',
  },
  {
    id: 3,
    cardTitle: 'Card 3',
    loadingColor: '#007aef',
    lenderImage: '',
  },
  {
    id: 4,
    cardTitle: 'Card 3',
    loadingColor: '#ff3034',
    lenderImage: '',
  },
  {
    id: 5,
    cardTitle: 'Card 3',
    loadingColor: '#f5e6d5',
    lenderImage: '',
  },
];

export default function Cards() {
  return (
    <ul className="portfolio-group">
      {MockCardData.map(portfolio => (
        <Portfolio
          key={portfolio.id}
          portfolioData={portfolio}
        />
      ))}
    </ul>
  );
}
