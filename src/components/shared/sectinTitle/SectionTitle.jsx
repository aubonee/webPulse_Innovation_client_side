

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <section className="mx-auto text-center w-4/12 lg:w-1/2 my-8">
           
            <h3 className="text-3xl text-purple-800 uppercase py-4">{heading}</h3>
            <p className="text-black mb-2">--- {subHeading} ---</p>
        </section>

           
        </div>
        
    );
};

export default SectionTitle;