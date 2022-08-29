import React from 'react';

const VolunteersRow = ({ product, refetch, index }) => {
    const { name, company, email, address, isActive } = product;
    let available;

    if (isActive === true) {
        available = 'Yes';
    }
    else {
        available = 'No';
    }

    return (
        <tr>
            <th>{index + 1}
            </th>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>
                        <div class="text-sm opacity-50">{address}</div>
                    </div>
                </div>
            </td>
            <td>
                {company}
                <br />
                <span class="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{available}</td>
            <th>
                <button class="btn btn-accent btn-xs">details</button>
            </th>
        </tr>
    );
};

export default VolunteersRow;