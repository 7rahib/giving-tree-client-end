import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";
import VolunteerRow from "./VolunteerRow";

const Volunteer = () => {

    const { data: volunteers, isLoading, refetch } = useQuery('volunteers', () => fetch('http://localhost:5000/volunteers').then(res => res.json()))

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
                    >Contact with who are available</span
                    >
                </h1>
                <div
                    className="mx-auto mt-3 text-gray-500 md:mt-5 md:max-w-lg md:text-center lg:text-lg"
                >
                    You can also join us as a volunteer. Follow instrustions below
                </div>
                <div className="flex flex-col items-center mt-5 text-center">
                    <span className="relative inline-flex w-full md:w-auto">
                        <Link to='/volunteerRegister'
                            className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-bold leading-6 text-white bg-primary border border-transparent rounded-full md:w-auto hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                            Join as a Volunteer
                        </Link>
                    </span>
                </div>
            </div>
            <div className="flex justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-2">
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
