import React from "react";
import { useQuery } from "react-query";
import volunteersImg from "../../Assets/volunteers.jpg";
import Loading from "../Shared/Loading";
import VolunteersRow from "./VolunteersRow";

const Volunteers = () => {

  const { data: volunteers, isLoading, refetch } = useQuery('volunteers', () => fetch('http://localhost:5000/volunteers').then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div class="mt-96 z-30 p-5 text-2xl text-white bg-black rounded">
          Know all ours Volunteers
        </div>
        <img
          src={volunteersImg}
          class="absolute z- w-auto min-w-full min-h-full max-w-none"
          alt="Donate"
        ></img>
      </header>
      <div class="m-auto p-5">
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <thead>
              <tr>
                <th>No.
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Avaibility</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                volunteers.map((volunteer, index) => <VolunteersRow
                  key={volunteers._id}
                  product={volunteer}
                  index={index}
                  refetch={refetch}
                ></VolunteersRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
