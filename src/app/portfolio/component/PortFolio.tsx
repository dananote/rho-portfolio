import { PortfolioData } from '@/type/portfolio/portfolio.type';

type Props = {
  portfolioData: PortfolioData;
};

export default function Portfolio(props: Props) {
  return (
    <li
      className="w-[200px] h-[350px]"
      style={{ backgroundColor: props.portfolioData.loadingColor }}
    >
      {props.portfolioData.cardTitle}
    </li>
  );
}
