import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import VolunteersRow from "./VolunteersRow";

const Volunteers = () => {

  const { data: volunteers, isLoading, refetch } = useQuery('volunteers', () => fetch('https://safe-waters-11324.herokuapp.com/volunteers').then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
        <h1
          class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"
        >
          <span class="inline md:block">Our Volunteers </span>
          <span
            class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary md:inline-block"
          >Contact with who are available</span
          >
        </h1>
        <div
          class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg"
        >
          You can also join us a volunteer. Follow instrustions below
        </div>
        <div class="flex flex-col items-center mt-12 text-center">
          <span class="relative inline-flex w-full md:w-auto">
            <Link to='/volunteerRegister'
              class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-primary border border-transparent rounded-full md:w-auto hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Join as a Volunteer
            </Link>
          </span>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 p-2">
        {
          volunteers.map((volunteer, index) => <VolunteersRow
            key={volunteers._id}
            product={volunteer}
            refetch={refetch}
          ></VolunteersRow>)
        }
      </div>
    </div>
  );
};

export default Volunteers;
