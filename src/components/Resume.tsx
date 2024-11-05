import { Button } from '../components/ui/button';

const Resume = () => {
  const onButtonClick = () => {
    const pdfUrl = '/brad_johnson_resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'brad_johnson_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8 flex justify-end">
        <Button onClick={onButtonClick}>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Resume PDF
        </Button>
      </div>

      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg my-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Brad Johnson</h1>
          <p className="text-gray-600">
            99 Bridle Rd, Billerica, MA • (857) 857-7232 • brad@bradjohnson.io
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Strategic and results-oriented Senior Technical Customer Success
            Manager with proven expertise in driving SaaS adoption and
            delivering exceptional customer experiences. Skilled at partnering
            with enterprise clients to maximize platform value, accelerate
            technology adoption, and achieve strategic business outcomes.
            Combines deep technical knowledge with consultative abilities to
            identify process optimization opportunities, devise strategic
            solutions, and ensure customer success. Expert at facilitating
            technical training, building lasting customer relationships, and
            driving product adoption across all organizational levels.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Professional Experience
          </h2>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Sr. Technical Customer Success Manager | Cloudinary
              </h3>
              <span className="text-gray-600">November 2021 - Present</span>
            </div>
            <p className="text-gray-600 mb-2">Santa Clara, CA</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Achieved 125% net revenue retention through proactive health
                monitoring and strategic business reviews
              </li>
              <li>
                Established company's DAM Center of Excellence, influencing
                product roadmap and best practices as founding subject matter
                expert
              </li>
              <li>
                Developed executive briefing program resulting in 40% increase
                in C-level engagement and platform advocacy
              </li>
              <li>
                Drove 40% increase in platform adoption through creation of
                custom integration solutions and automated workflows
              </li>
              <li>
                Led cross-functional initiatives resulting in 15+ customer
                references and 10 case studies showcasing platform innovation
              </li>
            </ul>
          </div>

          {/* Sitation */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Sr. Solution Advisor | Sitation
              </h3>
              <span className="text-gray-600">
                November 2020 - November 2021
              </span>
            </div>
            <p className="text-gray-600 mb-2">Apex, NC</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Increased client adoption rates by 40% through development of
                customized implementation frameworks
              </li>
              <li>
                Reduced average onboarding time from 6 months to 4 months for
                enterprise clients
              </li>
              <li>
                Achieved 99% client satisfaction rating while managing portfolio
                of 15+ concurrent enterprise implementations
              </li>
              <li>
                Generated $2M in expansion revenue through strategic account
                planning and solution optimization
              </li>
            </ul>
          </div>

          {/* Akeneo */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Functional Consultant | Akeneo
              </h3>
              <span className="text-gray-600">March 2018 - November 2020</span>
            </div>
            <p className="text-gray-600 mb-2">Nantes, France</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Reduced product time-to-market by 30 days through data cleanup
                and lifecycle optimization
              </li>
              <li>
                Decreased product delivery time by 3 months for B2B clients via
                strategic integrations
              </li>
              <li>
                Cut data enrichment errors by 50% through implementation of
                governance standards
              </li>
              <li>
                Achieved $100K annual cost savings by optimizing client's
                software ecosystem
              </li>
            </ul>
          </div>

          {/* Bynder */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Implementation Consultant | Bynder
              </h3>
              <span className="text-gray-600">July 2016 - March 2018</span>
            </div>
            <p className="text-gray-600 mb-2">Boston, MA</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Managed portfolio of 25+ enterprise implementations with 95%
                on-time delivery
              </li>
              <li>
                Reduced average implementation time by 45% through development
                of standardized playbooks
              </li>
              <li>
                Increased user adoption by 65% through development of custom
                training materials
              </li>
              <li>
                Successfully migrated 10M+ digital assets for Fortune 1000
                clients
              </li>
            </ul>
          </div>

          {/* USMC */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Infantry Rifleman | United States Marine Corps
              </h3>
              <span className="text-gray-600">May 2005 - May 2009</span>
            </div>
            <p className="text-gray-600 mb-2">Boston, MA</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Led and mentored a 4 person fire team during combat deployment
              </li>
              <li>Awarded Combat Action and Global War on Terrorism Ribbons</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Technical Skills & Expertise
          </h2>
          <p className="text-gray-700">
            SaaS Platform Adoption • Digital Asset Management • Technical
            Implementation • Solution Architecture • Project Management • Web
            Development • Process Optimization • Training & Development •
            Strategic Planning • Client Relationship Management • APIs • SDKs
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Education
          </h2>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Certificate, Wedding & Portrait Photography
            </h3>
            <p className="text-gray-600">
              New England School of Photography, Boston, MA
            </p>
            <p className="text-gray-600">June 2013 | GPA: 3.9</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
