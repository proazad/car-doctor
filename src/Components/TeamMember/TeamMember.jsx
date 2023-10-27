import ProductCard from "../MemberCard/MemberCard";

const TeamMember = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="container mx-auto">
        <div className="py-10 text-center w-7/12 mx-auto">
          <h3 className="text-2xl font-bold text-[#FF3811] mb-6">Team</h3>
          <h2 className="text-5xl font-bold">Meet Our Team</h2>
          <p className="text-base font-normal leading-8 mt-8">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
