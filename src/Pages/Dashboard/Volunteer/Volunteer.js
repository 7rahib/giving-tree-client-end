import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";
import VolunteerRow from "./VolunteerRow";

const Volunteer = () => {

    const { data: volunteers, isLoading, refetch } = useQuery('volunteers', () => fetch('https://givingtree.onrender.com/volunteers').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="mx-4">
            <div className="container max-w-lg py-5 mx-auto text-left md:max-w-none md:text-center">
                <h1
                    className="text-4xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-4xl lg:text-5xl"
                >
                    <span className="inline md:block">Our Volunteers </span>
                    <span
                        className="relative mt-1 text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary md:inline-block"
                    >Contact with who are available</span>
                </h1>
            </div>
            <div className="justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-2">
                {
                    volunteers?.map((volunteer, index) => <VolunteerRow
                        key={volunteer._id}
                        product={volunteer}
                        refetch={refetch}
                    ></VolunteerRow>)
                }
            </div>
        </div>
    );
};

export default Volunteer;
