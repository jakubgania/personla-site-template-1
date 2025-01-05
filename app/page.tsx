// import Image from "next/image";

import data from '../web.json'

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center p-6">
        <div className="w-full ml-6 mr-6">
          <div className="flex flex-row gap-4 text-2xl">
            <div className="basis-1/4">
              Example Name
            </div>
            <div className="basis-1/4">
              software engineer
            </div>
          </div>

          <div className="h-[40vw] flex items-center">
            <div>
              <p className="text-[6vw] font-bold">
                web.cloud.tech
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-40 mb-80 text-2xl">
            <div className="flex items-center w-2/4">
              <p className="max-w-[720px]">
                Enthusiast of new technologies. My main specialization is websites, but I go beyond that by learning other things. I like to explore, I'm intested in technology companies. I'm learning a lot and creating different concepts.
              </p>
            </div>
            <div className="flex items-center w-2/4">
              <div>
                <div>
                  Master's degree in computer science
                </div>
                <div>
                  Postgraduate studies in the field of "Multi Cloud Architect"
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 text-2xl mb-40">
            <div className="basis-1/4">
              <div className="mb-10 pt-2 border-t">
                Interests
              </div>
              {data.web.interests.map((item) => (
                <div id={item}>
                  {item}
                </div>
              ))}
            </div>
            <div className="basis-1/4">
              <div className="mb-10 pt-2 border-t">
                Technologies
              </div>
              {data.web.technologies.map((item) => (
                <div id={item}>
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

          <div>
            image section
          </div>

          <div className="flex w-full mb-80">
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
        </div>
      </main>
      <footer className="">
        footer section
      </footer>
    </div>
  );
}
