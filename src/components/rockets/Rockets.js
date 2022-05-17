import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rocket from './Rocket';
import { getList } from '../redux/rockets/rockets';

const shipList = (data) => {
  const list = (
    <Rocket
      id={data.id}
      name={data.name}
      description={data.description}
      image={data.image}
      key={data.id}
      reserved={data.reserved}
    />
  );
  return list;
};

const Rockets = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.space.length === 0) {
      dispatch(getList());
    }
  });

  return (
    <>
      {data.space.map((i) => shipList(i))}
    </>
  );
};

export default Rockets;
