/**************************
 * IMPORTS
 ***************************/

/**************************
 * CONFIG
 ***************************/
const HomePage = () => {
  return (
    <main className="mt-12 flex flex-col flex-wrap justify-center items-center">
      {/* FEYNMANN */}
      <div className="w-4/5 h-64 flex flex-row flex-nowrap ">
        {/* Feynmann description */}
        <div className="w-2/3">
          <h1 className="italic text-2xl">
            “Study hard what interests you the most in the most undisciplined,
            irreverent and original manner possible.”
          </h1>

          <p className="text-right text-xl mr-8 mt-16">Richard Feynmann</p>
        </div>

        {/* Feynmann image */}
        <div className="w-1/3 bg-feynmann bg-cover bg-no-repeat rounded-full bg-center"></div>
      </div>
    </main>
  );
};

export default HomePage;
