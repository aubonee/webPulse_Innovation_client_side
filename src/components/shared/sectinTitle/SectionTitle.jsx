

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <section className="mx-auto text-center w-1/2 lg:w-11/12 my-8">
           
            <h3 className="text-3xl text-[#5F9FFF] uppercase py-4 font-serif font-semibold">{heading}</h3>
            <p className="text-black mb-2">--- {subHeading} ---</p>
        </section>

           
        </div>
        
    );
};

export default SectionTitle;