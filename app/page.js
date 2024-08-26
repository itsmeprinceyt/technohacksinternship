export default function Home() {
  const projects = [
    {
      title: "Task 1: Landing Page [Kreo Mouse]",
      github: "https://github.com/itsmeprinceyt/kreomouse_nextjs",
      deployed: "https://kreomouse-nextjs.vercel.app/",
      explanation: "",
      extra: {
        label: "Live Development Stream",
        url: "https://www.youtube.com/live/PnekbuSgyBU",
      },
    },
    {
      title: "Task 2: Personal Portfolio Page",
      github: "https://github.com/itsmeprinceyt/portfolio_itsmeprince",
      deployed: "https://portfolio-itsmeprince.vercel.app/",
      explanation: "https://www.youtube.com/watch?v=LueUMebAVmQ",
    },
    {
      title: "Task 3: Calculator",
      github: "https://github.com/itsmeprinceyt/calculator_nextjs",
      deployed: "https://calculator-nextjs-six.vercel.app/",
      explanation: "https://www.youtube.com/watch?v=UoqdiPW0Nbk",
    },
    {
      title: "Task 4: Currency Converter",
      github: "https://github.com/itsmeprinceyt/currency_exchange",
      deployed: "https://currency-exchange-lemon-ten.vercel.app/",
      explanation: "https://www.youtube.com/watch?v=hXyu8DO7SQ8",
    },
    {
      title: "Task 5: Countdown Timer",
      github: "https://github.com/itsmeprinceyt/stopwatch_nextjs",
      deployed: "https://stopwatch-nextjs-pearl.vercel.app/",
      explanation: "https://www.youtube.com/watch?v=lrZp1JvKC8E",
    },
    {
      title: "Task 6: Registration Form",
      github: "https://github.com/itsmeprinceyt/registration_form_nextjs",
      deployed: "https://registration-form-nextjs.vercel.app/",
      explanation: "https://www.youtube.com/watch?v=M21wITuvN_c",
    },
    {
      title: "Task 7: Login Page",
      github: "https://github.com/itsmeprinceyt/login_page_nextjs",
      deployed: "https://login-page-nextjs-red.vercel.app/",
      explanation: "https://www.youtube.com/watch?v=GJuwvpS2dqc",
    },
];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-slate-900 py-10">
      <h1 className="text-white text-center text-3xl font-bold">
        Mohd Uvaish
      </h1>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Internship Projects
        </h1>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>GitHub Link:</strong>{" "}
                  <a
                    href={project.github}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.github}
                  </a>
                </li>
                <li>
                  <strong>Deployed Link:</strong>{" "}
                  <a
                    href={project.deployed}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.deployed}
                  </a>
                </li>
                <li>
                  <strong>Explanation Link:</strong>{" "}
                  <a
                    href={project.explanation}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.explanation}
                  </a>
                </li>
                {project.extra && (
                  <li>
                    <strong>{project.extra.label}:</strong>{" "}
                    <a
                      href={project.extra.url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.extra.url}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
