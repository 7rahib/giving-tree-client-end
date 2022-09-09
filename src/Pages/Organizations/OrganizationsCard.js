import React from 'react';

const OrganizationsCard = ({ product, refetch }) => {
    const { orgName, type, email, address, } = product;
    return (
        <div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-base-200 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div>
                <div class="text-center mt-2">
                    <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">{orgName}</h3>
                    <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                        {address}
                    </div>
                </div>
                <div class="mt-6 py-6 border-t border-slate-200 text-center">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-full px-4">
                            <p class="font-light leading-relaxed text-slate-600 mb-4">{type}</p>
                            <p class="font-normal text-slate-700 hover:text-slate-400">{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationsCard;