import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { loadTitle } from '@store/action/action.actions';

const AboutContent = () => {
  const [about, setAbout] = useState({});
  const [loading, isLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTitle({ title: 'About', path: 'about', site: 'true' }));
  }, []);
  return (
    <div>
      <div>photo</div>
      <div>description</div>
    </div>
  );
};

export default AboutContent;
