/* eslint-disable react/prop-types */
const RoomInfo = ({ rooms }) => {
  // console.log(rooms);
  const { guests, bedrooms, bathrooms, description } = rooms || {};
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              "
        >
          <div>Hosted by: {rooms?.host?.name}</div>
          <img className="w-8 rounded-full avatar" src={rooms.host?.image} alt="" />
        </div>
        <div
          className="
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              "
        >
          <div>{guests} guests</div>
          <div>{bedrooms} rooms</div>
          <div>{bathrooms} bathrooms</div>
        </div>
      </div>

      <hr />
      <div
        className="
          text-lg font-light text-neutral-500"
      >
        {description}
      </div>
      <hr />
    </div>
  );
};

export default RoomInfo;
