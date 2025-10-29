import { Link } from 'react-router-dom';

export default function MaximizeSection() {
    return (
        <section className="relative bg-black py-20">
            {/* Maximize Benefits CTA Section */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <div className="section-overlay section-multicolor relative rounded-3xl p-8 md:p-12 text-center">
                    <div className="relative z-10">
                        <h2 className="section-title font-black text-white mb-4">Ready to Maximize Your Benefits?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                            Discover step-by-step guides and tutorials to get the most value from your benefits
                        </p>
                        <Link 
                            to="/maximize"
                            className="claim-btn inline-flex items-center gap-2 py-4 px-8 rounded-xl font-semibold text-base tracking-wide"
                            aria-label="Explore maximize guides page"
                            data-discover="true"
                        >
                            Explore Maximize Guides →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}