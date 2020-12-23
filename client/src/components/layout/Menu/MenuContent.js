import React from 'react'

export default function MenuContent() {
    return (
        <div>
              ///////////////////////////////////////////////////////////////
  /////SETUP UL > LI //Change Background Color With ID /////////
  ///////////////////////////////////////////////////////////////
  //   const [menuLiHover, setMenuLiHover] = useState({ data: {} });

  //   const toggleTopicHoverOn = (index) => {
  //     console.log(menuLiHover.data[index]);
  //     if (
  //       clickedTopic.data[index] === false ||
  //       clickedTopic.data[index] === undefined
  //     ) {
  //       console.log('int');
  //       setMenuLiHover((menuLiHover) => ({
  //         data: { ...menuLiHover.data, [index]: true },
  //       }));
  //     }
  //   };

  //   const toggleTopicHoverOut = (index) => {
  //     console.log('out');
  //     setMenuLiHover((menuLiHover) => ({
  //       data: { ...menuLiHover.data, [index]: false },
  //     }));
  //   };

  ///////////////////////////////////////////////////////////////
  /////SETUP UL > LI > UL SHOW //Show Values from li key ////////
  ////Set state to clicked index ////////////////////////////////
  ///////////////////////////////////////////////////////////////

  //   const [tte, setTte] = useState(false);

  //   const [clickedTopic, setClickedTopic] = useState({ data: {} });

  //   const toggleTopicOpen = (index) => {
  //     console.log(clickedTopic.data[index]);
  //     console.log(clickedTopic);
  //     if (
  //       clickedTopic.data[index] === undefined ||
  //       clickedTopic.data[index] === false
  //     ) {
  //       console.log('true');
  //       setClickedTopic((clickedTopic) => ({
  //         data: { ...clickedTopic.data, [index]: true },
  //       }));
  //     } else {
  //       Object.entries(clickedTopic.data).map(([key]) => {
  //         setClickedTopic((clickedTopic) => ({
  //           data: { ...clickedTopic.data, [key]: false },
  //         }));
  //       });
  //     }
  //   };

        </div>
    )
}
