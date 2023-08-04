import Link from "next/link";
import jobCatContent from "data/job-categories";

const JobCategory = () => {
  return (
    <>
      {jobCatContent.slice(0, 6).map((item) => (
        <div className="item" key={item.id}>
          <Link href="/job-list-v1">
            <div className="icon-wrap">
              <div className={`icon ${item.icon}`}></div>
            </div>

            <div className="title">{item.catTitle}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default JobCategory;
