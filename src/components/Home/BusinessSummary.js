import React from 'react';

const BusinessSummary = () => {
  return (
    <div>
        <p className="pt-16 text-3xl pb-10">Business Summary Page</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
            <div class="avatar">
                <div class="w-40 mask mask-squircle">
                    <img src="https://api.lorem.space/image/face?hash=47449" />
                </div>
            </div>
            <div class="avatar">
                <div class="w-40 mask mask-squircle">
                    <img src="https://api.lorem.space/image/face?hash=47449" />
                </div>
            </div>
            <div class="avatar">
                <div class="w-40 mask mask-squircle">
                    <img src="https://api.lorem.space/image/face?hash=47449" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default BusinessSummary;
