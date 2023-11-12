import Image from "next/image";
import { ReactElement } from "react";

function HomeContainer(): ReactElement {
  const feedData = [
    {
      imgSrc: "https://dummyimage.com/720x400",
      width: 720,
      height: 400,
      title: "title",
      subTitle: "subtitle",
      description:
        "사랑보다먼 우정보다는 가까운 날보는 너의 그마음을 이젠떠나리",
    },
    {
      imgSrc: "https://dummyimage.com/720x400",
      width: 720,
      height: 400,
      title: "title",
      subTitle: "subtitle",
      description:
        "사랑보다먼 우정보다는 가까운 날보는 너의 그마음을 이젠떠나리",
    },
    {
      imgSrc: "https://dummyimage.com/720x400",
      width: 720,
      height: 400,
      title: "title",
      subTitle: "subtitle",
      description:
        "사랑보다먼 우정보다는 가까운 날보는 너의 그마음을 이젠떠나리",
    },
  ];
  return (
    <section className="text-gray-600 body-font ">
      {feedData.map((feed, idx) => {
        return (
          <div className="card w-96 bg-base-100 shadow-xl" key={idx.toString()}>
            <figure>
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/720x400"
                width={feed.width}
                height={feed.height}
                alt="blog"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{feed.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{feed.title}</div>
                <div className="badge badge-outline">{feed.subTitle}</div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default HomeContainer;
