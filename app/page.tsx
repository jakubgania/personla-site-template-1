import Image from "next/image";
import deskImage from "../public/desk-2.jpg"
import data from '../web.json'

export default function Home() {
  return (
    <div className="p-6">
      <main className="flex flex-col items-center">
        <div className="w-full ml-6 mr-6">
          <div className="flex flex-row gap-4 text-lg md:text-2xl">
            <div className="basis-2/4 md:basis-1/3">
              example name
            </div>
            <div className="basis-2/4 md:basis-2/3">
              software engineer
            </div>
          </div>

          <div className="relative h-[44vw] flex items-center overflow-hidden">
            <div
              className="absolute top-[-2vw] left-1/2 transform -translate-x-1/2 z-[-1] bg-cover bg-no-repeat blur-[44px]"
              style={{
                backgroundImage: "url('/bg-1.webp')",
                width: '58vw',
                height: '38vw',
              }}
            >
            </div>
              <p className="text-[5vw] md:text-[6vw] font-bold black text-left">
                web.cloud.tech
              </p>
            </div>

            <div className="flex flex-col gap-20 md:gap-40 lg:gap-60 xl:gap-96">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex items-center text-xl md:text-2xl w-full md:w-2/4">
                  <p className="max-w-[720px]">
                    Enthusiast of new technologies. My main specialization is websites, but I go beyond that by learning other things. I like to explore, I'm intested in technology companies. I'm learning a lot and creating different concepts.
                  </p>
                </div>
                <div className="flex items-center w-full md:w-2/4">
                  <div className="text-xl md:text-2xl">
                    <p>Master's degree in computer science</p>
                    <p>Postgraduate studies in the field of "Multi Cloud Architect"</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row gap-12 text-2xl">
              <div className="basis-1/4 text-xl md:text-2xl">
                <div className="mb-10 pt-2 border-t">
                  Interests
                </div>
                {data.web.interests.map((item) => (
                  <div key={item}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="basis-1/4 text-xl md:text-2xl">
                <div className="mb-10 pt-2 border-t">
                  Technologies
                </div>
                {data.web.technologies.map((item) => (
                  <div key={item}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="basis-2/4">
                <div className="mb-10 pt-2 border-t text-xl md:text-2xl">
                  Bio
                </div>
                <div className="text-xl md:text-2xl max-w-[740px]">
                  <p className="mb-10">
                    Hi. I'm a software developer and I create websites and more.
                  </p>
                  <p className="mb-10">
                    During my studies, I started creating my first web applications. Then, over time, I got to know different technologies and programming languages. Currently, I mainly specialize in web programming, but my interests are much wider.
                  </p>
                  <p>
                    In addition, I'm also interested in things like cloud computing, computers in general, artificial intelligence, machine learning, web development technologies and so on.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-full md:w-3/4">
                <Image
                  src={deskImage}
                  alt="Desk image"
                  quality={100}
                />
                <p className="text-lg md:text-xl mt-4">example description example description</p>
              </div>
            </div>

            <div className="flex w-full">
              <div className="">
                <div className="text-2xl">
                  Projects
                </div>
                <div className="leading-none mt-10 mb-10">
                  {data.web.projects.map((item) => (
                    <div key={item.name} className="text-xl md:text-4xl lg:text-6xl xl:text-8xl">
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col w-full md:flex-row md:w-9/12 gap-4">
                {data.web.social.map((item) => (
                  <div key={item.name} className="basis-1/5 border-t">
                    <a href={item.url} className="text-xl md:text-2xl" target="_blank">
                      <p className="pt-8 pb-8">
                        {item.name}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="mb-10 pt-2 border-t">
                <p className="text-xl md:text-2xl">
                  Certificates
                </p>
              </div>
              {data.web.certificates.map((item) => (
                <div key={item.id} className="basis-12 text-xl md:text-2xl">
                  <div className="flex flex-col md:flex-row">
                    <div className="basis-4/12">
                      {item.date}
                    </div>
                    <div className="basis-8/12">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <footer className="mt-8 md:mt-16 lg:mt-40">
        <div className="flex justify-between text-xl md:text-2xl">
          <div className="flex">
            <div>designed by jakubgania</div>
          </div>
          <div>2025</div>
        </div>
      </footer>
    </div>
  );
}
