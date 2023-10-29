import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const TribalMerchDescription = () => {

    const { data: individualMerch, isLoading } = useQuery('individualMerch', () => fetch(`https://givingtree.onrender.com/tribalmerchdescription/${id}`).then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    const { id } = useParams();
    console.log(individualMerch);
    const navigate = useNavigate();

    const price = individualMerch ? individualMerch[0]?.price : 0;
    const img = individualMerch ? individualMerch[0]?.img : 0;
    const color = individualMerch ? individualMerch[0]?.color : 0;
    const collection = individualMerch ? individualMerch[0]?.collection : 0;
    const description = individualMerch ? individualMerch[0]?.description : 0;
    const size = individualMerch ? individualMerch[0]?.size : 0;
    const name = individualMerch ? individualMerch[0]?.name : 0;
    const _id = individualMerch ? individualMerch[0]?._id : 0;
    console.log(price);

    return (
        <div>
            <section>
                <div class="relative mx-auto max-w-screen-xl px-4 py-8">
                    <button className='btn btn-xs btn-ghost' onClick={() => navigate(-1)}>◀︎ Go Back</button>
                    <div className='ml-2'>
                        <h1 class="text-2xl font-bold lg:text-3xl">{name}</h1>
                    </div>

                    <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
                        <div class="lg:col-span-3">
                            <div class="relative mt-4">
                                <img
                                    alt="x"
                                    src={img}
                                    class="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                                />
                            </div>
                        </div>

                        <div class="lg:sticky lg:top-0">
                            <form class="space-y-4 lg:pt-8">
                                <fieldset>
                                    <div class="mt-2 flex flex-wrap gap-1">
                                        {description}
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend class="text-lg font-bold">Color</legend>

                                    <div class="mt-2 flex flex-wrap gap-1">
                                        {color}
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend class="text-lg font-bold">Collection</legend>

                                    <div class="mt-2 flex flex-wrap gap-1">
                                        {collection}
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend class="text-lg font-bold">Size</legend>

                                    <div class="mt-2 flex flex-wrap gap-1">
                                        {size}
                                    </div>
                                </fieldset>

                                <div class="rounded border bg-gray-100 p-4">
                                    <p class="text-sm">
                                        <span class="block"> You have to pay in advance to confirm the order </span>
                                    </p>
                                </div>

                                <div>
                                    <p class="text-xl font-bold">${price}</p>
                                </div>

                                <Link
                                    to={`/paymentorder/${_id}`}
                                    type="submit"
                                    class="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                                >
                                    Order
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TribalMerchDescription;