import Image from "next/image";
import Link from "next/link";

export interface Profile {
  name: string;
  hosteRole: string;
  img: string;
  rate: number;
  bookings: number;
  rating: number;
  skills: string[];
  verified: boolean;
}

interface ProfileCardProps {
  profile: Profile;
}
export default function ProfileCard({ profile }: ProfileCardProps) {
  const nameArray = profile.name.split(" ");
  const firstName = nameArray[0];
  const lastName = nameArray[1];
  const initial = lastName[0].toUpperCase();
  return (
    <article className="card bg-white min-w-80 min-h-69 rounded-b-3xl">
      <div className="image-container relative h-48 w-full">
        <Image
          src={profile.img}
          alt={`${profile.name} profile image`}
          fill
          className="object-cover rounded-t-3xl"
        />
        {profile.verified && (
          <p className="bg-[#E8F5E9] flex items-center gap-2 rounded-full py-1 px-2 absolute top-2 right-1">
            <Image
              src={"/images/verify-icon.png"}
              alt="verify-badge"
              height={12}
              width={12}
            />
            <span className="uppercase text-[12px] font-bold leading-4.75 tracking-[0.3px]">
              verified
            </span>
          </p>
        )}
      </div>
      <div className="profile-details p-4 flex flex-col space-y-4">
        <div className="name-rate-role flex justify-between">
          <div className="name-role">
            <h1 className="text-[20px] font-normal leading-7 tracking-normal">
              {`${firstName} ${initial}`}.
            </h1>
            <p className="font-normal text-[16px] text-[#5A4139] leading-7">
              {profile.hosteRole}
            </p>
          </div>
          <div className="rate">
            <p className="font-bold text-[24px] text-primary tracking-[-0.24px] leading-8">
              ₦{profile.rate}K
            </p>
            <p className="text-[14px] tracking-[0.28px] font-medium leading-5 text-right">
              /hr
            </p>
          </div>
        </div>
        <div className="rating-bookings flex items-center space-x-3">
          <h2 className="flex items-center">
            <Image
              src={"/images/star.png"}
              alt="Star Icon"
              height={13}
              width={13}
            />
            <span className="text-[14px] font-medium text-[#1C1B1B]">
              {profile.rating}
            </span>
          </h2>
          <div className="divider w-1 h-1 bg-[#DCD9D9]"></div>
          <div className="booking text-[#5A4139] text-[14px] font-medium tracking-[0.28px]">
            {profile.bookings} Bookings
          </div>
        </div>
        <div className="skills flex gap-2">
          {profile.skills.map((skill) => (
            <p
              key={skill}
              className="bg-[#F0EDED] py-1 px-2 rounded-md capitalize"
            >
              {skill}
            </p>
          ))}
        </div>
        <Link
          href={""}
          className="w-full border border-[#E5E2E1] rounded-lg text-[14px] font-medium text-center p-2"
        >
          View Profile
        </Link>
      </div>
    </article>
  );
}
