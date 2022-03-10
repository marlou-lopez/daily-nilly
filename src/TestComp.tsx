import React from 'react';
import { useMatch } from '@tanstack/react-location';
const TestComp = () => {
  const { params } = useMatch();
  console.log("testcpm")
  return (
    <div>
      {JSON.stringify(params)}
      asdadasdasdadasdasdasdasdasd
    </div>
  )
};

export default TestComp;