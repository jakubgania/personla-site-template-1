import Image from "next/image";
import deskImage from "../public/desk-2.jpg"

import data from '../web.json'

export default function Home() {
  return (
    <div className="p-6">
      <main className="flex flex-col items-center">
        <div className="w-full ml-6 mr-6">
          <div className="flex flex-row gap-4 text-2xl">
            <div className="basis-1/4">
              Example Name
            </div>
            <div className="basis-1/4">
              software engineer
            </div>
          </div>

          <div className="relative h-[44vw] flex items-center overflow-hidden">
            <div
              className="absolute top-[-2vw] left-1/2 transform -translate-x-1/2 z-[-1] bg-cover bg-no-repeat blur-[20px]"
              style={{
                backgroundImage: "url('/bg-1.webp')",
                width: '60vw',
                height: '40vw',
              }}
            ></div>
            <p className="text-[6vw] font-bold black text-left">
              web.cloud.tech
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 mt-40 mb-80 text-2xl">
            <div className="flex items-center w-full md:w-2/4">
              <p className="max-w-[720px]">
                Enthusiast of new technologies. My main specialization is websites, but I go beyond that by learning other things. I like to explore, I'm intested in technology companies. I'm learning a lot and creating different concepts.
              </p>
            </div>
            <div className="flex items-center w-full md:w-2/4">
              <div>
                <p>Master's degree in computer science</p>
                <p>Postgraduate studies in the field of "Multi Cloud Architect"</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-12 text-2xl mb-40">
            <div className="basis-1/4">
              <div className="mb-10 pt-2 border-t">
                Interests
              </div>
              {data.web.interests.map((item) => (
                <div key={item}>
                  {item}
                </div>
              ))}
            </div>
            <div className="basis-1/4">
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
              <div className="mb-10 pt-2 border-t">
                Bio
              </div>
              <div className="max-w-[740px]">
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

          <div className="flex mb-80">
            <div className="w-full md:w-3/4">
              <Image
                src={deskImage}
                alt="Desk image"
                quality={100}
              />
              <p className="text-2xl mt-4">example description example description</p>
            </div>
          </div>

          <div className="flex w-full mt-80 mb-80">
            <div className="basis-3/4">
              <div className="text-2xl pl-2">
                Projects
              </div>
              <div className="leading-none mt-10 mb-10">
                {data.web.projects.map((item) => (
                  <div key={item.name} className="text-[5.2vw]">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex mb-80">
            <div className="flex w-9/12 gap-4">
              {data.web.social.map((item) => (
                <div key={item.name} className="basis-1/5 border-t">
                  <a href={item.url} className="text-2xl" target="_blank">
                    <p className="pt-8 pb-8">
                      {item.name}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 pt-2 border-t">
            <p className="text-2xl">
              Certificates
            </p>
          </div>

          <div>
            {data.web.certificates.map((item) => (
              <div key={item.id} className="flex text-2xl">
                <div className="basis-1/4">
                  {item.date}
                </div>
                <div className="basis-9/12">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-8">
        <div className="flex justify-between text-2xl">
          <div className="flex">
            <div>designed by jakubgania</div>
          </div>
          <div>2025</div>
        </div>
      </footer>
    </div>
  );
}
