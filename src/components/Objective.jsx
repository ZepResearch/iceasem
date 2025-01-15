export default function Objective() {
  return (
    <div className="py-24 sm:py-8">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-screen-2xl lg:px-8">
        <p className="mx-auto mt-2  text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl ">
           Conference Objectives
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 grid-cols-1 lg:grid-cols-3">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                Knowledge Exchange
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Facilitate the exchange of cutting-edge research and innovative ideas in applied science, engineering, and management.
                </p>
              </div>
              <div className="flex items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full"
                  src="https://illustrations.popsy.co/white/paper-documents.svg"
                  alt="Networking at conference"
                />
              </div>

              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 text-left">
                Student Engagement
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600  text-justify">
                The conference aims to actively involve students by providing platforms for presenting research through oral presentations, posters, and innovative demonstrations. 
                </p>
              </div>
              <div className="flex items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full"
                  src="https://illustrations.popsy.co/white/freelancer.svg"
                  alt="Networking at conference"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* <div className="relative lg:col-start-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Networking
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Create opportunities for researchers, practitioners, and industry professionals to connect and collaborate.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full"
                  src="https://illustrations.popsy.co/white/shaking-hands.svg"
                  alt="Networking at conference"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div> */}

          <div className="relative lg:col-start-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Networking
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Create opportunities for researchers, practitioners, and industry professionals to connect and collaborate.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full"
                  src="https://illustrations.popsy.co/white/shaking-hands.svg"
                  alt="Networking at conference"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          <div className="relative lg:col-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Innovation</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Showcase groundbreaking research and innovative solutions to real-world challenges in various fields.
                </p>
              </div>
              <div className="flex flex-1 justify-center items-center [container-type:inline-size] lg:pb-2">
                <img
                  className=""
                  src="https://illustrations.popsy.co/white/man-riding-a-rocket.svg"
                  alt="Innovative technology"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
         
          <div className="relative lg:col-start-3">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Interdisciplinary Approach</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Foster collaboration across disciplines to address complex global challenges and drive innovation.
                </p>
              </div>
              <div className="flex flex-1 justify-center items-center [container-type:inline-size]">
                <img
                  className="w-3/4"
                  src="https://illustrations.popsy.co/white/communication.svg"
                  alt="Interdisciplinary team collaboration"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

