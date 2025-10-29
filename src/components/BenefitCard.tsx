import type { BenefitItem } from '../types';

interface BenefitCardProps {
  benefit: BenefitItem;
}

const BenefitCard = ({ benefit }: BenefitCardProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="benefit-card liquid-glass-strong rounded-2xl overflow-hidden">
      <div className="p-8 flex flex-col h-full">
        {benefit.logo && (
          <img 
            src={benefit.logo} 
            alt={`${benefit.name} logo`} 
            className="w-12 h-12 object-contain mb-4 rounded-lg" 
            onError={handleImageError}
          />
        )}
        {benefit.warning && (
          <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full mb-2">
            ⚠️ Use at Own Risk
          </span>
        )}
        <h3 className="text-xl font-bold text-white mb-3">{benefit.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{benefit.desc}</p>
        <a 
          href={benefit.link}
          target="_blank"
          rel="noopener noreferrer"
          className="claim-btn w-full py-3 px-6 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 relative z-10"
        >
          Claim Offer
        </a>
      </div>
    </div>
  );
};

export default BenefitCard;
