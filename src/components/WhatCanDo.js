import Image from 'next/image'

export default function WhatCanDo() {
  return (
    <div className="cando">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl lg:text-5xl font-bold text-center text-white mb-12">What WriteIT solutions can do for you</h1>
        
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-12">
          <div className="md:w-1/2 flex flex-col space-y-4">
            <h2 className="text-3xl font-semibold text-white">Find 3X more qualified candidates</h2>
            <p className="text-gray-300">
              Activate 70% of your talent database with Search and Match AI. Qualify and connect candidates 
              to open roles in minutes. Provide runner-up candidates with additional opportunities to reduce cost.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/content-sect.png"
              alt="Find 3X more candidates"
              width={900}
              height={700}
              className="rounded"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-reverse md:space-x-8 mb-12">
          <div className="md:w-1/2 flex flex-col space-y-4">
            <h2 className="text-3xl font-semibold text-white">Drive personalized engagement across channels</h2>
            <p className="text-gray-300">
              Replace manual tasks with powerful cross-channel journeys that engage talent with the right message 
              at the right time. Trigger messages and workflows based on a candidate’s profile data or actions.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/content-sect-2.png"
              alt="Drive personalized engagement"
              width={900}
              height={700}
              className="rounded"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-12">
          <div className="md:w-1/2 flex flex-col space-y-4">
            <h2 className="text-3xl font-semibold text-white">5X responses with 1:1 texting</h2>
            <p className="text-gray-300">
              Meet your candidates where they are: on their phones. Move seamlessly from 1:1 messaging to customized 
              broadcasts. Slash no-shows and drop-offs with automated reminders and follow-ups.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/content-sect-3.png"
              alt="5X responses with 1:1 texting"
              width={900}
              height={700}
              className="rounded"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-reverse md:space-x-8 mb-12">
          <div className="md:w-1/2 flex flex-col space-y-4">
            <h2 className="text-3xl font-semibold text-white">Automate screening and scheduling</h2>
            <p className="text-gray-300">
              Screen high volumes of applicants without sacrificing the candidate experience and instantly schedule interviews.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/content-sect-4.png"
              alt="Automate screening and scheduling"
              width={900}
              height={700}
              className="rounded"
            />
          </div>
        </div>

        {/* Section 5 */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-12">
          <div className="md:w-1/2 flex flex-col space-y-4">
            <h2 className="text-3xl font-semibold text-white">Answer candidate questions, instantly</h2>
            <p className="text-gray-300">
              Whether it’s a question on open roles, benefits, or work-from-home policy, Sense can instantly answer 24/7.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/content-sect-5.png"
              alt="Answer candidate questions instantly"
              width={900}
              height={700}
              className="rounded"
            />
          </div>
        </div>

        {/* Section 6 */}
        <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-reverse md:space-x-8 mb-12">
          <div className="md:w-1/2 flex flex-col space-y-4">
            <h2 className="text-3xl font-semibold text-white">Spot roadblocks with powerful analytics</h2>
            <p className="text-gray-300">
              Access real-time analytics with dashboards that spot engagement trends and uncover hidden hiring roadblocks.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/content-sect-6.png"
              alt="Spot roadblocks with powerful analytics"
              width={900}
              height={700}
              className="rounded"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
