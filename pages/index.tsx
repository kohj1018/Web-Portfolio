import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <nav></nav>
      </header>

      <main className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <h1 className="text-7xl">Thinking about clients</h1>
        <p className="text-2xl mt-3">사용자의 더 나은 웹 경험을 생각하며 개발합니다.</p>
      </main>

      <section
        id="about"
        className="w-[100vw] flex flex-wrap gap-20 justify-center"
      >
        <div className="relative w-[205px] h-[205px]">
          <Image
            className="!border-1 !border-solid !border-black rounded-full"
            src="/img/profile.jpg"
            layout="fill"
            objectFit="contain"
            alt="프로필 사진"
          />
        </div>
        <section className="flex flex-col gap-y-20">
          <div className="flex flex-wrap gap-20">
            <article>
              <h5 className="text-4xl font-bold mb-2">Information</h5>
              <p className="text-base">Birth : 99.10.18.</p>
              <p className="text-base">College : 한양대학교 ERICA Campus</p>
              <p className="text-base">Major : 소프트웨어전공</p>
              <p className="text-base">Total GPA : 4.4</p>
              <p className="text-base">Major GPA (CS) : 4.43</p>
            </article>
            <article>
              <h5 className="text-4xl font-bold mb-2">Education</h5>
              <p className="text-base"><span className="text-xs mr-1.5">2022.04 ~ 2023.02(예정)</span>SW마에스트로 13기</p>
              <p className="text-base"><span className="text-xs mr-1.5">2020.03 ~ 2026.02(예정)</span>한양대학교 ERICA</p>
              <p className="text-base"><span className="text-xs mr-9">2021.07 ~ 2021.08</span>과기정통부 AI 실무 기본/응용 교육 (120시간)</p>
              <p className="text-base"><span className="text-xs mr-9">2020.07 ~ 2020.08</span>SW 스타트업 Engineering School(APP)</p>
              <p className="text-base"><span className="text-xs mr-9">2015.03 ~ 2018.02</span>수지고등학교 과학중점반 졸업</p>
            </article>
          </div>
          <article>
            <h5 className="text-4xl font-bold mb-2">Awards</h5>
            <p className="text-base"><span className="text-xs mr-1.5">2020.06</span>제4회 SW창업아이디어톤 대상 (한양대학교 총장상)</p>
            <p className="text-base"><span className="text-xs mr-1.5">2020.11</span>UN Hult Prize 장려상</p>
            <p className="text-base"><span className="text-xs mr-1.5">2021.01</span>제2회 4개대학연합창업캠프 우수상 (성균관대,아주대,중앙대,한양대ERICA LINC+ 사업단)</p>
            <p className="text-base"><span className="text-xs mr-1.5">2021.06</span>소프트웨어융합대학 포트폴리오 경진대회 대상 (소프트웨어융합대학장상)</p>
          </article>
        </section>
      </section>

      <footer>

      </footer>
    </div>
  )
}

export default Home
