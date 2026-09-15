"use client";
import Button from "@/components/button";
import Switch from "@/components/switch";
import Image from "next/image";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { profiles } from "@/lib/profile";
import ProfileCard from "@/components/profile-card";

export default function Staff() {
  const [ischecked, setIsChecked] = useState(false);
  return (
    <div className="page-container font-primary">
      <div className="container px-6 mx-auto">
        <section>
          <h1 className="font-semibold text-[32px] leading-10 font-primary text-center">
            Nigeria's finest event staff, all in one place.
          </h1>
          <p className="font-normal text-[16px] leading-6.75 text-center">
            Vetted professionals for high-end hospitality and events.
          </p>
          <div className="searcbar-container flex justify-center my-18">
            <div className="searchbar">
              <IoSearchOutline />
              <input
                type="text"
                placeholder="Search by category, skill, or location..."
              />
              <Button text="Search" className="bg-primary text-white" />
            </div>
          </div>
          <div className="filters_workers font-primary grid md:grid-cols-4 gap-10">
            <div className="filter-container md:col-span-1 border border-[#E5E2E1] p-8 rounded-3xl h-fit">
              <div className="filter-header flex justify-between border-b border-[#DCD9D9] pb-4">
                <h3 className="font-semibold text-[20px] leading-7">Filters</h3>
                <button className="font-medium text-[14px] leading-5 text-primary cursor-pointer">
                  Clear all
                </button>
              </div>
              <div className="category mt-8">
                <h3 className="uppercase text-[14px] tracking-[0.7px] leading-5 mb-3">
                  category
                </h3>
                <div className="categories-container flex flex-col space-y-2">
                  {["bartender", "hostess", "usher", "supervisor"].map(
                    (category) => {
                      return (
                        <div className="category flex items-center gap-2">
                          <input
                            type="checkbox"
                            name={category}
                            id={category}
                            className="size-4 flex items-center justify-center cursor-pointer appearance-none rounded border border-gray-400 checked:bg-primary checked:border-none checked:after:content-['✓'] checked:after:text-white"
                          />

                          <label
                            htmlFor={category}
                            className="capitalize cursor-pointer text-[16px font-normal]"
                          >
                            {category}
                          </label>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
              <div className="verify-switch flex justify-between items-center p-2 rounded-lg mt-5 border border-[#E5E2E1]">
                <div className="desc flex items-center gap-2">
                  <Image
                    src={"/images/verify-icon.png"}
                    alt="verify Icon"
                    height={20}
                    width={20}
                  />
                  <span className="text-[14px] font-medium">Verified Only</span>
                </div>
                <Switch
                  checked={ischecked}
                  onchange={(e) => setIsChecked(e.target.checked)}
                />
              </div>
            </div>
            <div className="hostess-display md:col-span-3">
              <div className="header flex justify-between">
                <p className="text-[16px] font-normal leading-6">
                  Showing 42 available professionals in Lagos.
                </p>
                <div className="sorting flex">
                  <p>Sort by:</p>
                  <select name="sortBy" id="sortBy">
                    <option value="recommended">Recommended</option>
                  </select>
                </div>
              </div>
              <div className="card mt-7 flex gap-15">
                {profiles.map((profile) => (
                  <ProfileCard profile={profile} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
