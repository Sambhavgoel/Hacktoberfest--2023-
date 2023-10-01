import Image from "next/image";
import Link from "next/link";

const Card = (mentor) => {
    return (
        <div className="flex flex-col items-center justify-between px-4 py-4 mx-5 my-20 border-2 shadow-xl md:w-72 w-52 md:py-4 md:px-8 bg-none rounded-xl md:mx-10 border-bgold-200 text-bgold-200">
            <div>
                <Image
                    alt={mentor.Name}
                    height={200}
                    width={200}
                    src={mentor.imgSrc}
                    className="rounded-full shadow-xl"
                />
            </div>

            <h2 className="my-2 text-sm font-bold md:text-xl text-bblue-100">
                {mentor.Name}
            </h2>
            <h2 className="text-xs md:text-base text-bgold-200">
                {mentor.Designation},
            </h2>
            <h2>COSC</h2>

            <div className="flex my-2 ">
                <div className="mx-1">
                    <Link href={mentor.LinkedIn}>
                        <Image
                            src="/images/linkedin.svg"
                            alt="Linkedin Icon"
                            height={30}
                            width={30}
                        />
                    </Link>
                </div>
                <div className="mx-1">
                    <Link href={mentor.Github}>
                        <Image
                            src="/images/github.svg"
                            alt="GitHub Icon"
                            height={30}
                            width={30}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Card;
