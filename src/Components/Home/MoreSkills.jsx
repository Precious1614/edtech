import { SKILLS } from "../../SkillData";
import { useState } from "react";

const WeSkillYou = (props) => {
  const { id, skillName, skillImage } = props.data;

  return (
    <div className="" key={id}>
      <div
        className="w-[400px] h-[400px] bg-[#92969c] rounded-md flex flex-col justify-end"
        style={{
          backgroundImage: `url(${skillImage})`,
        }}
      >
        <h5 className="text-white text-[36px] font-medium text-center">
          {skillName}
        </h5>
        <div className="text-white text-[16px] font-medium tracking-wide  m-[2rem]">
          <p>David Timothy</p>
          <div className="flex">
            <p>4.0</p>
            <p>(30211)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function MoreSkills() {
  const [showMore, setShowMore] = useState(6);

  const showMoreItems = (e) => [setShowMore((prevalue) => prevalue + 5)];

  return (
    <div className="">
      <div className="flex gap-[4rem] flex-wrap items-center justify-between">
        {SKILLS.slice(0, showMore).map((SkillData, index) => (
          <WeSkillYou data={SkillData} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {showMore < SKILLS.length && (
          <button
            onClick={showMoreItems}
            className="w-[220px] h-[50px] bg-[#0a2f6b] rounded-md text-white text-[20px] font-semibold"
          >
            View more skills
          </button>
        )}
      </div>
    </div>
  );
}

export default MoreSkills;
